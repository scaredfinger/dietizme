import { createContext, useContext, useMemo } from 'react'

export const PublicUrlPrefixContext = createContext('')

export const ImageOptimizerContext = createContext('')

export function useImageUrlFunction() {
  const publicUrlPrefix = useContext(PublicUrlPrefixContext)
  const imageOptimizer = useContext(ImageOptimizerContext)

  return useMemo(
    () => (fileId: string, width: number, quality: number) => {
      const fileUrl = `${publicUrlPrefix}/${fileId}`

      return [
        imageOptimizer,
        `_next/image?url=${encodeURIComponent(
          fileUrl,
        )}&w=${width}&q=${quality}`,
      ].join(imageOptimizer.endsWith('/') ? '' : '/')
    },
    [imageOptimizer, publicUrlPrefix],
  )
}
