/**
 * Type definitions for localStorage
 */
interface Storage {
  readonly length: number;
  clear(): void;
  getItem(key: string): string | null;
  key(index: number): string | null;
  removeItem(key: string): void;
  setItem(key: string, value: string): void;
}

interface WindowWithStorage extends Window {
  localStorage: Storage;
  sessionStorage: Storage;
}

declare var localStorage: Storage;
declare var sessionStorage: Storage;
