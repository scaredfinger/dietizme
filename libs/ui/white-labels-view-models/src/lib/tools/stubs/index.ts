import { Subject, firstValueFrom } from 'rxjs'
import { MonadicMap } from './monadic-map'

export class AsyncStub<R, A extends unknown[] = unknown[]> {
  private map: MonadicMap<string, Signal> = new MonadicMap()
  private pendingTasks: Promise<unknown>[] = []

  public signal(result: R, ...args: A): void {
    this.map.get(this.getKey(args)).match({
      Some: (signal) => signal.signal(result),
      None: () => {
        const signal = new Signal()
        this.map.set(this.getKey(args), signal)
        signal.signal(result)
      },
    })
  }

  public signalError(error: Error | unknown, ...args: A): void {
    this.map.get(this.getKey(args)).match({
      Some: (signal) => signal.signalError(error),
      None: () => {
        const signal = new Signal()
        this.map.set(this.getKey(args), signal)
        signal.signalError(error)
      },
    })
  }

  private getKey(args: unknown[]) {
    return JSON.stringify(args)
  }

  public untilSignaled(...args: A): Promise<unknown> {
    return this.map.get(this.getKey(args)).match({
      Some: (signal) => signal.untilSignaled(),
      None: () => {
        const signal = new Signal()
        this.map.set(this.getKey(args), signal)
        return signal.untilSignaled()
      },
    })
  }

  public async untilNoMorePendingTasks(): Promise<void> {
    try {
      await Promise.all(this.pendingTasks)
    } catch {
      // ignore
    }

    this.pendingTasks = []
  }

  public async call(...args: A): Promise<unknown> {
    const promise = this.untilSignaled(...args)

    this.pendingTasks.push(promise)

    return await promise
  }
}

export function createAsyncStubs<R, A extends unknown[]>(): AsyncStub<R, A> {
  return new AsyncStub<R, A>()
}

export class Signal {
  private subject: Subject<unknown> = new Subject()

  public untilSignaled(): Promise<unknown> {
    return firstValueFrom(this.subject)
  }

  public signal(result: unknown): void {
    this.subject.next(result)
  }

  public signalError(error: Error | unknown): void {
    this.subject.error(error)
  }
}
