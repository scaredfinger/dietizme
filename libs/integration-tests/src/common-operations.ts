import { NhostClient } from '@nhost/nhost-js'

import fetch from 'isomorphic-fetch'
import FormData from 'form-data'
import { env } from 'process'
import { faker } from '@faker-js/faker'
import { v4 } from 'uuid'
import sharp from 'sharp'
import { kebabCase as paramCase, random } from 'lodash'
import { randomUUID, createHash } from 'crypto'
import { GraphQLClient } from 'graphql-request'
import { existsSync, mkdir, readFile, writeFile } from 'fs'
import fs from 'fs-extra'

import {
  Product_Group_Insert_Input,
  Rate_Insert_Input,
  Site_Insert_Input,
} from '@otiuming/domain-omnidata-types'
import { Configuration } from '@otiuming/domain-rates'

import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
  Create_Initial_OrganizationMutationVariables,
  getSdk,
  Multilanguage_Field_Input,
  Place_Input,
  Product_Feature_Insert_Input,
  Product_Insert_Input,
  Rate_Type_Enum,
  Role_Enum,
  Sdk,
  Unit_Management_Enum,
  Venue_Description_Insert_Input,
  Venue_Facility_Insert_Input,
  Venue_Good_To_Know_Insert_Input,
  Venue_Usps_Insert_Input,
  Venue_Usps_Line_Insert_Input,
} from './generated'
import path from 'path'

function sha1(input: string): string {
  return createHash('sha1').update(input).digest('hex')
}

export interface SignUpParams {
  email: string
  password: string
}

const { PASSWORD } = env

export const RANDOM_IMAGES = [
  'https://source.unsplash.com/0uVjYEwFyf0',
  'https://source.unsplash.com/Dnel83cn4dk',
  'https://source.unsplash.com/V0VFSmUdeLU',
  'https://source.unsplash.com/DrWNzeNuu5M',
  'https://source.unsplash.com/eQDjx1ZufpE',
  'https://source.unsplash.com/DxEEeHO-Ej8',
  'https://source.unsplash.com/f6FdIjVW5ow',
  'https://source.unsplash.com/PO4HEv2HAv4',
  'https://source.unsplash.com/1OP1kTrnQUI',
  'https://source.unsplash.com/1xK9jzmR-18',
  'https://source.unsplash.com/jECQTSI1vfg',
  'https://source.unsplash.com/qxxuXNFZjWI',
  'https://source.unsplash.com/BCRSoM6FB_U',
  'https://source.unsplash.com/LgxbeU9xGRg',
  'https://source.unsplash.com/ZawEpGkz9Zc',
  'https://source.unsplash.com/hGWBjnWaO8U',
  'https://source.unsplash.com/bbEw5Aa0S2A',
  'https://source.unsplash.com/XC_XSqraRvM',
  'https://source.unsplash.com/CyD-_nN19bc',
  'https://source.unsplash.com/9DHCvqAM2oA',
  'https://source.unsplash.com/QP0topr6RYs',
  'https://source.unsplash.com/AGIYSE6-WgE',
  'https://source.unsplash.com/42Z4wvISyKY',
  'https://source.unsplash.com/kwymB90JZTE',
  'https://source.unsplash.com/379kd7YDRWU',
  'https://source.unsplash.com/J79K2-exXYE',
  'https://source.unsplash.com/wWs8SQz8hP0',
  'https://source.unsplash.com/AsahNlC0VhQ',
  'https://source.unsplash.com/8YMYu9hwdCI',
  'https://source.unsplash.com/IRiBVHL5p_0',
  'https://source.unsplash.com/-aTQXiEK9uo',
  'https://source.unsplash.com/b-j3xVRBZF0',
  'https://source.unsplash.com/ahxMi_-w0jE',
  'https://source.unsplash.com/gGStaIejsq4',
  'https://source.unsplash.com/RcjeWcr_KZ4',
  'https://source.unsplash.com/bSVQzLryxtY',
  'https://source.unsplash.com/nJ2vb71-hb4',
]

interface CreateUserOptions {
  sdk: ReturnType<typeof getSdk>
  nhost: NhostClient
  signUpParams: SignUpParams
}

export async function createUser({
  nhost,
  sdk,
  signUpParams,
}: CreateUserOptions) {
  await nhost.auth.signUp(signUpParams)

  const { users } = await sdk.get_user({
    email: signUpParams.email,
  })
  const user = users[0]

  await sdk.verify_user({
    user_id: user.id,
  })

  return user
}

type CreateDefaultUserOptions = Omit<CreateUserOptions, 'signUpParams'> &
  Partial<Pick<CreateUserOptions, 'signUpParams'>>

export async function createDefaultUser({
  nhost,
  sdk,
  signUpParams = { email: 'admin@otiuming.com', password: PASSWORD },
}: CreateDefaultUserOptions) {
  const signUpResult = await nhost.auth.signUp(signUpParams)

  if (signUpResult.error) {
    throw signUpResult.error
  }

  const { users } = await sdk.get_user({
    email: signUpParams.email,
  })

  const user = users[0]

  await sdk.verify_user({
    user_id: user.id,
  })

  return user.id
}

function createImage({
  imageId,
  preffix,
}: {
  preffix: string
  imageId: string
}) {
  return {
    file_id: imageId,
    ...createNameAndHeadline({ preffix }),
  }
}

export function createNameAndHeadline({
  nameLength = 5,
  headlineLength = 10,
  preffix = '',
}: {
  nameLength?: number
  headlineLength?: number
  preffix: string
}) {
  return {
    name: {
      data: fakeMultiLanguageSentences({
        preffix: `${preffix}.name`,
        length: nameLength,
      }),
    },
    headline: {
      data: fakeMultiLanguageSentences({
        preffix: `${preffix}.headline`,
        length: headlineLength,
      }),
    },
  }
}

export function fakeMultiLanguageSentences({
  length = 5,
  preffix,
}: {
  preffix: string
  length?: number
}) {
  const body = `${preffix} - ${faker.lorem.sentence(length)}`

  return {
    en: `EN: ${body}`,
    es: `ES: ${body}`,
    fr: `FR: ${body}`,
    de: `DE: ${body}`,
  }
}

export async function uploadRandomLogos(nhost: NhostClient) {
  const logos = [
    'https://img.logoipsum.com/299.png',
    'https://img.logoipsum.com/298.png',
    'https://img.logoipsum.com/296.png',
    'https://img.logoipsum.com/295.png',
    'https://img.logoipsum.com/293.png',
    'https://img.logoipsum.com/293.png',
  ]

  const chosenLogo = logos[Math.floor(Math.random() * logos.length)]
  const sourceImages: string[] = Array(3).fill(chosenLogo)

  const downloadPromises = sourceImages.map((source) =>
    downLoadImageAndUploadToNHost(nhost, source, `${faker.random.word()}`),
  )

  return Promise.all(downloadPromises)
}

export async function uploadImages(nhost: NhostClient, images: string[]) {
  const downloadPromises = images.map((source) =>
    downLoadImageAndUploadToNHost(nhost, source, `${faker.random.word()}`),
  )

  return Promise.all(downloadPromises)
}

export async function uploadRandomImages(nhost: NhostClient, count = 7) {
  if (count == 0) return []

  const imagePath = path.join(__dirname, 'random-image.jpg')

  return Promise.all(
    Array(count).fill('').map(() => uploadToNHost(nhost, imagePath, randomUUID()))
  )
}

async function uploadToNHost(
  nhostClient: NhostClient,
  filePath: string,
  destination: string,
): Promise<string> {
  const buffer = await fs.readFile(filePath)

  const formData = new FormData()
  formData.append('file', buffer, destination)

  const result = await nhostClient.storage.upload({
    formData,
  })

  return result.fileMetadata?.processedFiles[0]?.id || ''
}

async function downLoadImageAndUploadToNHost(
  nhost: NhostClient,
  source: string,
  destination: string,
) {
  // const randomImageIds = await uploadRandomImages(nhost, 1)
  // return randomImageIds[0]
  // return uploadRandomImages(nhost, 1)
  const body = await getImageBuffer(source)

  const sharpImage = sharp(body)

  sharpImage.resize(1366, 768, {
    fit: 'inside',
  })

  sharpImage.webp({
    effort: 6,
    quality: 60,
  })

  const buffer = await sharpImage.toBuffer()

  const formData = new FormData()
  formData.append('file', buffer, destination)
  const result = await nhost.storage.upload({
    formData,
  })

  return result.fileMetadata?.processedFiles[0]?.id || ''
}

export function getImageBuffer(source: string): Promise<ArrayBuffer> {
  return withCache(
    () =>
      withRetries(async () => {
        const abort = new AbortController()
        setTimeout(() => abort.abort(), 1000)
        const r = await fetch(source, {
          signal: abort.signal,
        })
        return await r.arrayBuffer()
      }),
    source,
  )
}

function withCache(
  inner: () => Promise<ArrayBuffer>,
  key: string,
): Promise<ArrayBuffer> {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    mkdir('./.tmp', () => {
      const name = sha1(key)
      const path = `./.tmp/${name}.tmp`
      if (existsSync(path)) {
        readFile(path, (err, data) => {
          if (err) {
            reject(err)
          }

          resolve(data)
        })
      } else {
        inner().then((data) => {
          writeFile(path, Buffer.from(data), (err) => {
            if (err) {
              reject(err)
            }
          })
          resolve(data)
        })
      }
    })
  })
}

async function withRetries<R>(
  actualFecth: () => Promise<R>,
  numberOfRetries = 10,
) {
  let currentAttempt = 0
  let currentTimeout = 50
  let lastError: Error
  while (currentAttempt < numberOfRetries) {
    try {
      return await actualFecth()
    } catch (error) {
      lastError = error
      await new Promise((r) => setTimeout(r, currentTimeout))
      currentAttempt++
      currentTimeout *= 2
    }
  }

  throw lastError
}

export async function createSeedData(
  nhost: NhostClient,
  sdk: Sdk,
  graphql: GraphQLClient,
  getUserSdk: (user: unknown) => Sdk,
  proto?: Partial<OrganizationProto>,
) {
  const organizationName = proto?.settings?.name
  const signUpParams: SignUpParams = proto?.admin

  const name = organizationName ?? faker.lorem.sentence()
  const snakeCasedName = paramCase(name)
  const id = randomUUID()

  const admin = await createDefaultUser({ nhost, sdk, signUpParams })

  const adminSdk = getUserSdk(admin)

  const protoHero = proto?.pages?.home

  const hero_image_id = protoHero?.heroImage
    ? await uploadImages(nhost, [protoHero.heroImage])
    : (await uploadRandomImages(nhost, 1))[0]

  const my_web_sections = [
    {
      section_id: 'home',
      value: {
        title:
          protoHero?.title ??
          fakeMultiLanguageSentences({ preffix: 'myweb.title' }),
        subtitle:
          protoHero?.subtitle ??
          fakeMultiLanguageSentences({ preffix: 'myweb.subtitle' }),
        hero_image_id: hero_image_id?.[0],
      },
    },
  ]

  const sites: Site_Insert_Input[] = [
    {
      url: `${snakeCasedName}.otiuming.com`,
    },
  ]

  const proto_usps: Venue_Usps_Line_Insert_Input[] =
    proto?.highlights?.points?.map((point, position) => ({
      position,
      name: {
        data: point.title,
      },
      headline: {
        data: point.headline,
      },
    }))

  const usps_lines: Venue_Usps_Line_Insert_Input[] =
    proto_usps ||
    [0, 1, 2].map((_, i) => ({
      position: i,
      ...createNameAndHeadline({ preffix: 'usps.lines' }),
    }))

  const uspsImage = proto?.highlights?.image
    ? await uploadImages(nhost, [proto.highlights.image])
    : await uploadRandomImages(nhost, 1)

  const usps: Venue_Usps_Insert_Input = {
    image_id: uspsImage[0],
    lines: {
      data: usps_lines,
    },
  }

  const facilitiesImages = proto?.facilities
    ? await uploadImages(
        nhost,
        proto.facilities.map((f) => f.image),
      )
    : await uploadRandomImages(nhost, 10)

  const protoFacilities = proto?.facilities?.map((feature, position) => ({
    position,
    image_id: facilitiesImages[position],
    name: {
      data: feature.title,
    },
    headline: {
      data: feature.headline,
    },
  }))

  const facilities: Venue_Facility_Insert_Input[] = (
    protoFacilities ||
    facilitiesImages.map((image_id, position) => ({
      position,
      image_id,
      ...createNameAndHeadline({
        preffix: 'facility',
      }),
    }))
  ).map((f) => ({
    ...f,
    slug: {
      data: {
        en: paramCase(f.name.data.en),
        es: paramCase(f.name.data.es),
        fr: paramCase(f.name.data.fr),
        de: paramCase(f.name.data.de),
      },
    },
  }))

  const protoVenueDescription = proto?.venue?.description
  const venueDescritpion: Venue_Description_Insert_Input =
    protoVenueDescription || {
      ...fakeMultiLanguageSentences({ preffix: 'venue.description' }),
    }

  const protoVenueGoodToKnow = proto?.venue?.goodToKnow
  const venueGoodToKnow: Venue_Good_To_Know_Insert_Input =
    protoVenueGoodToKnow || {
      ...fakeMultiLanguageSentences({ preffix: 'venue.goodToKnow' }),
    }

  const products = await createProducts(nhost, proto?.products || 10)

  const protoGallery = proto?.gallery?.images
  const venue_gallery = await createGallery(nhost, protoGallery || 7)

  const protoLogo = proto?.theme?.logo
  const branding_images = protoLogo
    ? await uploadImages(nhost, [
        proto.theme.logo,
        proto.theme.logoLight,
        proto.theme.favicon,
      ])
    : await uploadRandomLogos(nhost)

  const booking_questions = {
    data:
      proto?.bookingQuestions?.map((p) => ({
        text: {
          data: p.text,
        },
        type: p.type,
        scope: p.scope,
        value:
          p.type === Booking_Question_Type_Enum.Select
            ? {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                options: (p.value as any).options.map((o) => ({
                  ...o,
                  value: o.value ?? randomUUID(),
                })),
              }
            : p.value,
      })) || [],
  }

  const protoHeadline = proto?.settings?.headline
  const protoPlace = proto?.venue?.place

  const organization: Create_Initial_OrganizationMutationVariables = {
    organization: {
      id,
      name,

      email: proto?.admin?.email || faker.internet.email(),

      phone_number: proto?.settings?.phone || faker.phone.number(),

      headline: {
        data:
          protoHeadline ||
          fakeMultiLanguageSentences({ preffix: 'organization.headline' }),
      },

      members: {
        data: [
          {
            role: Role_Enum.Admin,
            user_id: admin,
          },
        ],
      },

      venues: {
        data: [
          {
            gallery: venue_gallery,
            usps: {
              data: usps,
            },
            facilities: {
              data: facilities,
            },
            description: {
              data: venueDescritpion,
            },
            good_to_know: {
              data: venueGoodToKnow,
            },
            place: {
              data: protoPlace || {
                name: `Plaça D'espanya, 07002 Palma, Balearic Islands, Spain`,
                latitude: 39.5752077,
                longitude: 2.653347,
              },
            },
          },
        ],
      },

      products: {
        data: products,
      },

      sites: {
        data: sites,
      },

      branding: {
        data: {
          logo_id: branding_images[0],
          logo_light_id: branding_images[1],
          favicon_id: branding_images[2],
          meta_title: {
            data: proto?.theme?.metaTitle || {
              ...fakeMultiLanguageSentences({ preffix: 'branding.metaTitle' }),
            },
          },
          meta_description: {
            data: proto?.theme?.metaDescription || {
              ...fakeMultiLanguageSentences({
                preffix: 'branding.metaDescription',
              }),
            },
          },
        },
      },

      sections: {
        data: my_web_sections,
      },

      socials: {
        data: proto?.settings?.socials || {
          facebook: `https://www.facebook.com/${snakeCasedName}`,
          instagram: `https://www.instagram.com/${snakeCasedName}`,
          twitter: `https://www.twitter.com/${snakeCasedName}`,
          youtube: `https://www.youtube.com/${snakeCasedName}`,
        },
      },

      business_model: {
        data: {
          rate_type: Rate_Type_Enum.Daily,
          ...proto?.businessModel,
        },
      },

      booking_questions,
    },
  }

  const response = await sdk.create_initial_organization(organization)

  const allRates =
    proto?.products?.flatMap((p, i) => {
      const pid = products?.[i].id
      return p.rates.map((r) => ({
        id: v4(),
        product_id: pid,
        name: makeMultilanguageText(r.name),
        configuration: r.configuration,
        price_calendar: [],
      }))
    }) || []
  const rateSavePromises = allRates.map(async (rate) => {
    try {
      await adminSdk.create_rate({
        arg: {
          id: rate.id,
          product_id: rate.product_id,
          organization_id: id,
        },
      })
      await adminSdk.rate_save({
        arg: rate,
      })
    } catch (e) {
      console.log('ERROR', {
        e,
        rate,
        jsonRate: JSON.stringify(rate),
      })
    }
  })
  const rateSaveResponse = await Promise.all(rateSavePromises)

  const productsFromDb = response.insert_organization_one.products

  const productDbIdFromByName: Record<string, string> = productsFromDb.reduce(
    (acc, p) => ({
      ...acc,
      [p.name.value]: p.id,
    }),
    {},
  )

  const productDbIdByProtoId: Record<string, string> =
    proto?.products?.reduce(
      (acc, current) => ({
        ...acc,
        [current.id]: productDbIdFromByName[current.name.en],
      }),
      {},
    ) ?? {}

  await createProductGroups(proto, nhost, id, productDbIdByProtoId, sdk)

  await adminSdk.activate_organization_features({
    arg: {
      organization_id: id,
      category_ids: ['ACCOMMODATIONS', 'ACTIVITIES', 'GENERIC_PRODUCTS'],
    },
  })

  const featuresQueryData = await sdk.get_organization_features({
    organization_id: id,
  })

  const featuresByInternalName: Record<string, string> =
    featuresQueryData.feature.reduce(
      (acc, f) => ({
        ...acc,
        [f.internal_name]: f.id,
      }),
      {},
    )

  if (!proto?.products)
    return {
      response,
      rateSaveResponse,
      admin,
      organization,
    }

  const insertProductFeaturesArgs: Product_Feature_Insert_Input[] =
    proto?.products?.flatMap((p, i) => {
      const pid = products?.[i].id
      return p.features?.map((f) => ({
        product_id: pid,
        feature_id: featuresByInternalName[f.id],
        value: f.value,
      }))
    })

  await sdk.insert_product_features({
    product_features: insertProductFeaturesArgs,
  })

  return {
    response,
    rateSaveResponse,
    admin,
    organization,
  }
}

async function createProductGroups(
  proto: Partial<OrganizationProto>,
  nhost: NhostClient,
  id: string,
  productDbIdByProtoId: Record<string, string>,
  sdk: Sdk,
) {
  const productGroupProtos: OrganizationProto['productGroups'] =
    proto?.productGroups ?? randomProductGroups(productDbIdByProtoId)

  const productGroupImages = productGroupProtos.map((pg) => pg.image)
  const productGroupImagesIds = proto?.productGroups
    ? await uploadImages(nhost, productGroupImages)
    : await uploadRandomImages(nhost, productGroupImages.length)

  const productGroups: Product_Group_Insert_Input[] =
    productGroupProtos.map((pg, index) => ({
      organization_id: id,
      name: {
        data: pg.name,
      },
      headline: {
        data: pg.headline,
      },
      description: {
        data: pg.description,
      },
      products: {
        data: pg.productsInGroup.map((p, i) => ({
          position: i,
          product_id: productDbIdByProtoId[p],
        })),
      },
      slug: {
        data: {
          en: paramCase(pg.name.en),
          es: paramCase(pg.name.en),
          fr: paramCase(pg.name.en),
          de: paramCase(pg.name.en),
        },
      },
      image_id: productGroupImagesIds[index],
    })) || []

  await sdk.upsert_product_groups({
    product_groups: productGroups,
  })
}

function randomProductGroups(productDbIdByProtoId: Record<string, string>) {
  const productIds = Object.values(productDbIdByProtoId)

  return Array(5)
    .fill(0)
    .map(() => ({
      id: v4(),
      name: fakeMultiLanguageSentences({ preffix: 'productGroup.name' }),
      headline: fakeMultiLanguageSentences({
        preffix: 'productGroup.headline',
      }),
      description: fakeMultiLanguageSentences({
        preffix: 'productGroup.description',
      }),
      productsInGroup: faker.helpers.arrayElements(productIds, 3),
      image: RANDOM_IMAGES[Math.floor(Math.random() * RANDOM_IMAGES.length)],
    }))
}

export async function createGallery(
  nhost: NhostClient,
  protoImagesOrCount: string[] | number = 7,
) {
  const count =
    typeof protoImagesOrCount === 'number'
      ? protoImagesOrCount
      : protoImagesOrCount.length
  const protoImages =
    typeof protoImagesOrCount === 'number' ? undefined : protoImagesOrCount
  const uploadedImages = protoImages
    ? await uploadImages(nhost, protoImages)
    : await uploadRandomImages(nhost, count)
  const galleryImages = uploadedImages.map((i) =>
    createImage({ preffix: 'gallery.image', imageId: i }),
  )
  const gallery = {
    data: {
      ...createNameAndHeadline({ preffix: 'gallery' }),
      items: {
        data: galleryImages,
      },
    },
  }
  return gallery
}

export async function createProducts(
  nhost: NhostClient,
  protoProductsOrCount: ProductProto[] | number = 7,
) {
  const count =
    typeof protoProductsOrCount === 'number'
      ? protoProductsOrCount
      : protoProductsOrCount.length
  const protoProducts =
    typeof protoProductsOrCount === 'number' ? undefined : protoProductsOrCount
  const products: Product_Insert_Input[] = []

  for (let current = 0; current < count; current++) {
    const currentProtoProduct = protoProducts?.[current]
    const protoImages = currentProtoProduct?.images
    const gallery = await createGallery(nhost, protoImages || 5)
    const ratesInsert: Rate_Insert_Input[] = []

    const id = v4()

    const product: Product_Insert_Input = currentProtoProduct
      ? {
          id,
          price_from: currentProtoProduct.priceFrom,
          name: {
            data: currentProtoProduct.name,
          },
          headline: {
            data: currentProtoProduct.headline,
          },
          description: {
            data: currentProtoProduct.description,
          },
          gallery,
          rates: {
            data: ratesInsert,
          },
          business_model: {
            data: currentProtoProduct.businessModel
              ? {
                  time_management:
                    currentProtoProduct.businessModel.time_management,
                  unit_management:
                    currentProtoProduct.businessModel.unit_management,
                }
              : {
                  time_management: Rate_Type_Enum.TimeSlots,
                  unit_management: Unit_Management_Enum.PerPax,
                },
          },
          slug: {
            data: {
              en: paramCase(currentProtoProduct.name.en),
              es: paramCase(currentProtoProduct.name.en),
              fr: paramCase(currentProtoProduct.name.en),
              de: paramCase(currentProtoProduct.name.en),
            },
          },
        }
      : {
          price_from: random(20, 50),
          ...createNameAndHeadline({ preffix: 'product' }),
          description: {
            data: fakeMultiLanguageSentences({
              preffix: 'product.description',
            }),
          },
          gallery,
          slug: {
            data: {
              en: paramCase(faker.lorem.sentence()),
              es: paramCase(faker.lorem.sentence()),
              fr: paramCase(faker.lorem.sentence()),
              de: paramCase(faker.lorem.sentence()),
            },
          },
        }

    products.push(product)
  }

  return products
}

export function fakePlace(): Place_Input {
  return {
    name: faker.address.streetAddress(true),
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
  }
}

export interface MultilanguageTextProto {
  en: string
  es: string
  fr: string
  de: string
}

export interface DailyRateProto {
  daily: number
}

export interface HourlyRateProto {
  hourly: number
}

export interface PriceCalendarBase {
  from: Date
  to: Date
}

export type PriceCalendar = PriceCalendarBase &
  (DailyRateProto | HourlyRateProto)

export type Hour =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23

export interface TimeSlotsConfigurationProto {
  durationHours: number
  pricePerPerson: number
  startingHours: Hour[]
}

export interface RateProto {
  name: string
  calendar?: PriceCalendar[]
  configuration?: Configuration
}

export interface ProductProto {
  id: string
  priceFrom: number
  name: MultilanguageTextProto
  headline: MultilanguageTextProto
  description: MultilanguageTextProto
  images: string[]
  rates?: RateProto[]
  businessModel?: {
    time_management: Rate_Type_Enum
    unit_management: Unit_Management_Enum
  }
  features?: {
    id: string
    value?: unknown
  }[]
}

export interface OrganizationProto {
  businessModel?: {
    rate_type: Rate_Type_Enum
  }
  admin: {
    email: string
    password: string
  }
  facilities: {
    id: string
    title: MultilanguageTextProto
    headline: MultilanguageTextProto
    image: string
  }[]
  gallery: {
    images: string[]
  }
  settings: {
    name: string
    headline: MultilanguageTextProto
    phone: string
    socials: {
      facebook: string
      instagram: string
      twitter: string
      youtube: string
    }
  }
  highlights: {
    image: string
    points: {
      id?: string
      title: MultilanguageTextProto
      headline: MultilanguageTextProto
    }[]
  }
  pages: {
    home: {
      title: MultilanguageTextProto
      subtitle: MultilanguageTextProto
      heroImage: string
    }
  }
  products: ProductProto[]
  theme: {
    metaTitle: MultilanguageTextProto
    metaDescription: MultilanguageTextProto
    favicon: string
    logo: string
    logoLight: string
  }
  venue: {
    place: {
      name: string
      latitude: number
      longitude: number
    }
    description: MultilanguageTextProto
    goodToKnow: MultilanguageTextProto
  }
  bookingQuestions: {
    text: MultilanguageTextProto
    type: Booking_Question_Type_Enum
    scope: Booking_Question_Scope_Enum
    value: unknown
  }[]
  productGroups?: {
    id: string
    name: MultilanguageTextProto
    headline: MultilanguageTextProto
    description: MultilanguageTextProto
    productsInGroup: string[]
    image: string
  }[]
}

export function makeMultilanguageParagraphs({
  preffix,
  length = 5,
}: {
  preffix: string
  length?: number
}): Multilanguage_Field_Input {
  const body = preffix + faker.lorem.paragraphs(length)

  return {
    en: `en: ${body}`,
    es: `es: ${body}`,
    fr: `fr: ${body}`,
    de: `de: ${body}`,
  }
}

export function makeMultilanguageText(name: string): Multilanguage_Field_Input {
  return {
    en: name,
    es: name,
    fr: name,
    de: name,
  }
}
