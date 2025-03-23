import { UploadResult } from '@uppy/core'

import { useImageUrlFunction } from '@otiuming/ui-common'
import { Media_Gallery_Item_Insert_Input } from '@otiuming/domain-omnidata-types'

import { Uploader } from '@/components/uploader'

import { EditorProps } from '../form'
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  DeleteOutlined,
  DownCircleOutlined,
  UpCircleOutlined,
  VerticalAlignBottomOutlined,
  VerticalAlignTopOutlined,
} from '@ant-design/icons'

type Image = Media_Gallery_Item_Insert_Input

export interface Gallery {
  images: Media_Gallery_Item_Insert_Input[]
}

export function moveUp<T>(list: T[], index: number): T[] {
  if (!list || !list.length || index <= 0 || index >= list.length) {
    return list
  }

  const result = [
    ...list.slice(0, index - 1),
    list[index],
    list[index - 1],
    ...list.slice(index + 1),
  ]

  return result
}

export function moveDown<T>(list: T[], index: number): T[] {
  if (!list || !list.length || index < 0 || index >= list.length - 1) {
    return list
  }

  const result = [
    ...list.slice(0, index),
    list[index + 1],
    list[index],
    ...list.slice(index + 2),
  ]

  return result
}

export function moveToTop<T>(list: T[], index: number): T[] {
  if (!list || !list.length || index < 1 || index >= list.length) {
    return list
  }

  const result = [
    list[index],
    ...list.slice(0, index),
    ...list.slice(index + 1),
  ]

  return result
}

export function moveToBottom<T>(list: T[], index: number): T[] {
  if (!list || !list.length || index < 0 || index >= list.length - 1) {
    return list
  }

  const result = [
    ...list.slice(0, index),
    ...list.slice(index + 1),
    list[index],
  ]

  return result
}

export function remove<T>(list: T[], index: number) {
  if (!list || !list.length || index < 0 || index >= list.length) {
    return list
  }

  const result = [
    ...list.slice(0, index),
    ...list.slice(index + 1, list.length),
  ]

  return result
}

interface GallerItemListEditorProps {
  formData: Media_Gallery_Item_Insert_Input[]
  onChange: (v: Media_Gallery_Item_Insert_Input[]) => void
  getFileUrl: (f: string) => string
}

const GalleryItemListEditor: React.FC<GallerItemListEditorProps> = ({
  formData,
  onChange,
  getFileUrl,
}) => {
  const images = formData

  function handleClick(
    movement: (l: Image[], i: number) => Image[],
    index: number,
  ) {
    const newList = movement(images, index)

    onChange(newList)
  }

  // TODO: This is a patch for a bug
  if (!images?.map) {
    return <></>
  }

  return (
    <ol className="image-gallery-edit">
      {images.map((image, index) => (
        <li key={index}>
          <div >
            {/* <button className="image-gallery-grip">
            <i className="bi bi-grip-horizontal"></i>
          </button> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={`file_id: ${image.file_id}`}
              src={getFileUrl(image.file_id)}
            />{' '}
            <div className="image-gallery-actions">
              <button
                type="button"
                disabled={index === 0}
                onClick={() => handleClick(moveUp, index)}
              >
                <ArrowUpOutlined />
              </button>
              <button
                type="button"
                disabled={index === 0}
                onClick={() => handleClick(moveToTop, index)}
              >
                <VerticalAlignTopOutlined />
              </button>
              <button
                type="button"
                disabled={index === images.length - 1}
                onClick={() => handleClick(moveDown, index)}
              >
                <ArrowDownOutlined />
              </button>
              <button
                type="button"
                disabled={index === images.length - 1}
                onClick={() => handleClick(moveToBottom, index)}
              >
                <VerticalAlignBottomOutlined />
              </button>
              <button
                type="button"
                onClick={() => handleClick(remove, index)}
              >
                <DeleteOutlined />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

interface GalleryEditorProps {
  formData: Gallery
  onChange: (v: Gallery) => void
  getFileUrl: (f: string) => string
}

export const GalleryEditor: React.FC<GalleryEditorProps> = ({
  formData,
  onChange,
  getFileUrl,
}) => {
  function onChangeInner(images: Media_Gallery_Item_Insert_Input[]) {
    onChange({ images })
  }

  return (
    <GalleryItemListEditor
      formData={formData.images}
      onChange={onChangeInner}
      getFileUrl={getFileUrl}
    />
  )
}

export function buildGalleryEditor(filePrefix: string) {
  const GalleryEditor: React.FC<
    EditorProps<Media_Gallery_Item_Insert_Input[]>
  > = (props) => {
    const { formData, onChange } = props
    const images = formData

    function onComplete(upload: UploadResult) {
      if (!upload || !upload.successful || !upload.successful[0]) return

      const processedFiles: { id: string }[] = (upload.successful[0] as any)
        .processedFiles

      if (!processedFiles || !processedFiles.length) return

      const file_id = processedFiles[0].id

      // TODO: Make sure these fields are not needed
      const newImages = [
        ...images,
        {
          // id: file_id,
          file_id,
        },
      ].map((item, position) => ({
        ...item,
        // position,
      }))

      onChange(newImages)
    }

    const makeUploadUrlFunction = useImageUrlFunction()
    const getFilePreview = (fileId: string) =>
      makeUploadUrlFunction(fileId, 320, 75)

    return (
      <>
        <GalleryItemListEditor {...props} getFileUrl={getFilePreview} />

        <div className="uploader gallery-editor">
          <Uploader onComplete={onComplete} fileNamePrefix={filePrefix} />
        </div>
      </>
    )
  }

  return GalleryEditor
}

export const DefaultGalleryEditor = buildGalleryEditor('default-gallery-')
