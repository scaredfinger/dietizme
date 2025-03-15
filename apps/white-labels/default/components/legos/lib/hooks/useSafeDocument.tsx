/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
export function useSafeDocument(): any {
  if (typeof document !== 'undefined') {
    return document
  }

  return {
    querySelector: () => {},
  }
}
