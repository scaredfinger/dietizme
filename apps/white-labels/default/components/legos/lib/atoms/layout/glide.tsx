/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
import Glide from '@glidejs/glide'

export function createGlide(
  uniqueClass: string,
  options: Partial<Glide.Options> | undefined,
) {
  if (!Glide) {
    return {
      mount: () => {},
    }
  }

  return new Glide(uniqueClass, options)
}
