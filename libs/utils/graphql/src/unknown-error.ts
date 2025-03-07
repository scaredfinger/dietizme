
export class UnknownError extends Error {
  constructor(public readonly inner: unknown) {
    super('Unknown error');
  }
}
