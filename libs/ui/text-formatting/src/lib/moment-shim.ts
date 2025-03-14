/**
 * Minimal Moment interface shim that matches only what we use
 * Allows us to maintain type checking without the actual dependency
 */
export interface Moment {
  toDate(): Date;
}
