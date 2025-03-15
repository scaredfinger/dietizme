import Uppy, { BasePlugin } from '@uppy/core'
import { NhostClient } from '@nhost/nextjs'
import * as _ from 'lodash'
import FormData from 'form-data'

type HasuraStorageClient = NhostClient['storage']

export interface NHostPluginOptions {
  id?: string
  bucketId?: string
  nameTransform?: (name: string) => string
  nhost: NhostClient
  storageUrl?: string
}

export class NHostPlugin extends BasePlugin<NHostPluginOptions> {
  private nhost: NhostClient
  private bucketId: string | undefined
  private nameTransform: (name: string) => string
  private storage: HasuraStorageClient

  constructor(uppy: Uppy, opts?: NHostPluginOptions) {
    super(uppy, opts)

    this.id = opts?.id || 'uppy-nhost'
    this.type = 'uppy-nhost'
    if (! opts?.nhost) {
      throw Error('`nhost` is required')
    }
    this.nhost = opts.nhost
    this.bucketId = opts?.bucketId
    this.nameTransform = opts?.nameTransform || _.identity

    this.storage = this.nhost.storage
  }

  override install(): void {
    const { uppy } = this

    uppy.addUploader(this.upload.bind(this))
  }

  private async upload(fileIds: string[]): Promise<void> {
    const { uppy, bucketId, nameTransform } = this
    const { storage } = this

    await Promise.all(
      fileIds.map(async (fileId) => {
        const uppyFile = uppy.getFile(fileId)
        const name = nameTransform(uppyFile.name)

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let response: { error: any, fileMetadata?: any }
        if (!uppyFile.data.type) {
          const file = uppyFile.data as File
          response = await storage.upload({
            name,
            bucketId,
            file,
          })
        } else {
          const formData = new FormData()
          formData.append('file', uppyFile.data)
          response = await storage.upload({
            bucketId,
            formData,
          })
        }

        if (response.error || !response.fileMetadata) {
          uppy.emit('upload-error', uppyFile, response.error)
        }

        uppy.setFileState(fileId, {
          ...response.fileMetadata,
        })
      })
    )
  }

  override uninstall(): void {
    const { uppy } = this

    uppy.removeUploader(this.upload.bind(this))
  }
}

export interface NHostFakePluginOptions { 
  id?: string
  // uploadedFiles?: string[]
}

export class NHostFakePluging extends BasePlugin<NHostFakePluginOptions> {
  // private uploadedFiles: string[]

  constructor(uppy: Uppy, opts: NHostFakePluginOptions) {
    super(uppy, opts)

    this.id = opts.id || 'uppy-nhost'
    this.type = 'uppy-nhost'
    // this.uploadedFiles = opts.uploadedFiles
  }
  

  override install(): void {
    const { uppy } = this

    uppy.addUploader(this.upload.bind(this))
  }

  private async upload(fileIds: string[]): Promise<void> {
    const { uppy } = this

      fileIds.forEach((fileId) => {
        const uppyFile = uppy.getFile(fileId)
        const name = uppyFile.name

        uppy.setFileState(fileId, {
          name
        })
      })
  }

  override uninstall(): void {
    const { uppy } = this

    uppy.removeUploader(this.upload.bind(this))
  }
}