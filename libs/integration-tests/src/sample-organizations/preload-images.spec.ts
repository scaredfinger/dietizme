import { env, exit } from 'process'
import { basename } from 'path'
import { config } from 'dotenv'

import {
  getImageBuffer
} from '../common-operations'

if (!env.ADMIN_SECRET) {
  config({
    path: '../.env'
  })
}

// import { mallorcaCyclingTours } from './mallorca-cycling-tours'
// import { ricciRetreat } from './ricci-retreat'
import { handy4you } from './handy4you'

const fullFileName = __filename
const baseFileName = basename(fullFileName)

const shouldRunThisFile = process.argv.filter((a) => a.includes(baseFileName))

if (!shouldRunThisFile) exit(0)

jest.setTimeout(1_000_000)

describe('preload all images', () => {
  it('can preload all images', async () => {
    const images = [
      // mallorcaCyclingTours,
      // ricciRetreat,
      handy4you
    ]
      .flatMap(o => 
        [
          o.highlights.image,
          o.theme.logo,
          o.theme.logoLight,
          o.theme.favicon,
          ...o.gallery.images,
          ...o.products.flatMap(p => p.images),
          ...o.facilities.map(f => f.image),
        ])

    const promises = images
      .map(image => {
        getImageBuffer(image)
      })

    await Promise.all(promises)
  })
})