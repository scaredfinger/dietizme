import { UploadResult } from '@uppy/core'
import { useImageUrlFunction } from '@otiuming/ui-common'

import { EditorProps } from './form'

import { Uploader } from '@/components/uploader'

export const buildUploadEditor = (filePrefix: string) =>
  function UploadEditor({
    formData,
    t,
    onChange,
    schema,
  }: EditorProps<string>) {
    function onComplete(upload: UploadResult) {
      if (!upload || !upload.successful || !upload.successful[0]) return

      const file: any = upload.successful[0]

      onChange(file.processedFiles[0].id)
    }

    const makeUploadUrl = useImageUrlFunction()
    const mediaUrl = makeUploadUrl(formData, 320, 75)

    return (
      <div className="uploader upload-editor">
        <h4>{schema.title}</h4>
        <sub>{schema.description}</sub>
        <Uploader fileNamePrefix={filePrefix} onComplete={onComplete} />
        <div className="preview">
          <div className="shrink-0">
            {formData && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={mediaUrl} alt="Preview" />
            )}
          </div>
        </div>
      </div>
    )
  }

export const DefaultUploadEditor = buildUploadEditor('default-upload-')
