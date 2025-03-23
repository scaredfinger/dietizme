import { DragDrop } from '@uppy/react'
import Uppy, { UploadResult } from '@uppy/core'
import { useNhostClient } from '@nhost/nextjs'

import { createLength6Id } from '@otiuming/utils-common'
import { NHostPlugin } from '@otiuming/ui-uppy-nhost'

import { useTranslation } from 'react-i18next'
import { useLogger } from '@otiuming/ui-common'

export interface UploaderProps {
  fileNamePrefix?: string
  onComplete?: (e: UploadResult) => void
  uppy?: Uppy
}

export function Uploader(props: UploaderProps) {
  const logger = useLogger()

  const nhost = useNhostClient()

  const { t } = useTranslation()

  const uppy =
    props.uppy ||
    (function createNewUppy() {
      const newUppy = new Uppy({
        autoProceed: true,
        restrictions: {
          maxFileSize: 750 * 1024, // 0.75MB
          maxNumberOfFiles: 1,
          allowedFileTypes: ['image/*'],
        },
      })

      const prefix = props.fileNamePrefix || 'upload'

      newUppy
        .use(NHostPlugin, {
          nhost: nhost,
          nameTransform: () => `${prefix}${createLength6Id()}`,
        })
        .on('complete', (completeEvent) => {
          logger.debug({ eventId: 'UPLOAD_COMPLETED', result: completeEvent })

          props && props.onComplete && props.onComplete(completeEvent)
        })
        .on('error', (error) => {
          logger.error({ eventId: 'UPLOAD_ERROR', error })
        })
        .on('file-added', (file) => {
          logger.debug({ eventId: 'UPLOAD_FILE_ADDED', file })
        })

      return newUppy
    })()

  return (
    <DragDrop
      uppy={uppy}
      onDrop={(_files) => {
        logger.debug({ eventId: 'UPLOAD_DROP', files: _files })
      }}
      locale={{
        strings: {
          dropHereOr: t('actions.add-media.title'),
          browse: 'browse',
        },
      }}
    />
  )
}

export default Uploader
