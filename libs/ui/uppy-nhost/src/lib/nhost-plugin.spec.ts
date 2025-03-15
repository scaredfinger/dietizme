import { Uppy } from '@uppy/core'
import { NhostClient } from '@nhost/nextjs'
import FormData from 'form-data'

import { NHostPlugin } from './nhost-plugin'

describe.skip('sharedUtilsUppyNhost', () => {
  let nhost: NhostClient

  beforeEach(async () => {
    nhost = new NhostClient({
      subdomain: 'localhost',
    })

    const signInResponse = await nhost.auth.signIn({
      email: 'admin@otiuming.com',
      password: 'admin',
    })

    expect(signInResponse.error).toBeFalsy()

    nhost.storage.setAccessToken(signInResponse.session?.accessToken)
  })

  afterEach(async () => {
    const signOutResponse = await nhost.auth.signOut()

    expect(signOutResponse.error).toBeFalsy()
  })

  it('can upload', async () => {
    const blob = new Blob(['"lorem upsum"'], {
      type: 'application/json',
    })
    const formData = new FormData()
    formData.append('file', blob, 'test.txt')
    const result = await nhost.storage.upload({
      formData,
    })

    expect(result.error).toBeFalsy()
    expect(result.fileMetadata).toBeTruthy()

    const publicUrl = nhost.storage.getPublicUrl({
      fileId: result.fileMetadata?.processedFiles[0]?.id || '',
    })

    // TODO: Download
  })

  it('can run', async () => {
    const uppy = new Uppy({
      autoProceed: true,
    })

    uppy.use(NHostPlugin, {
      nhost,
      nameTransform: () =>
        `lorem-ipsum/public/sample-upload-${new Date().getMilliseconds()}`,
      id: 'id',
    })

    uppy.on('complete', (result) => {
      console.log(result)
    })

    const blob = new Blob([JSON.stringify({ a: 1, b: 'b' })], {
      type: 'application/json',
    })

    uppy.addFile({
      name: 'blob',
      data: blob,
    })

    await uppy.upload()
  })
})
