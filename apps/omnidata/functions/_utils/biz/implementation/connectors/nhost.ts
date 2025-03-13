import { NhostClient } from '@nhost/nhost-js'

import { Cleanup_Input, Preload_CleanupQuery } from '../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'
import { logger } from '../../../logger'
import { config } from '../../../config'

export interface DeleteFileResult {
  error: any
  index: number
  fileId: string
}

export async function deleteFiles(files: any[]) {
  logger.debug({ eventId: 'DELETE_FILES_START', files })
  let results: DeleteFileResult[] = []
  try {
    results = await deleteFilesImpl(files)

    const filesResultWithError = results.filter(({ error }) => !!error)
    if (filesResultWithError.length) {
      logger.warn({ eventId: 'DELETE_FILES_SOME_FAILED', filesResultWithError })
    }
  } catch (error) {
    logger.error({ eventId: 'DELETE_FILES_ERROR', error })
  } finally {
    logger.debug({ eventId: 'DELETE_FILES_END', results })
  }
}

async function deleteFilesImpl(files: any[]) {

  logger.debug({ eventId: 'DELETE_FILES_IMPL_START' })

  const nhost = new NhostClient({
    subdomain: config.nhostDomain,
    region: config.nohstRegion,
    adminSecret: config.omnidataAdminSecret,
  })

  logger.debug({ eventId: 'DELETE_FILES_IMPL_NHOST_INSTACE_CREATED', files, nhost })

  const deleleteTaks = files.map((fileId) => nhost.storage.delete({ fileId }))
  const responses = await Promise.all(deleleteTaks)
  const results = responses
    .map(({ error }, index) => ({ error, index }))
    .filter(({ error }) => !!error)
    .map(({ error, index }) => ({ error, index, fileId: files[index] }))

  return results
}
