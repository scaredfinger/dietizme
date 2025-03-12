import { NhostClient } from '@nhost/nhost-js'
import { GraphQLClient } from 'graphql-request'
import { v4 as uuid } from 'uuid'
import { faker } from '@faker-js/faker'
import { env, exit } from 'process'
import { random } from 'lodash'
import { basename } from 'path'
import { config } from 'dotenv'
import _ from 'lodash'
import { afterAll, beforeEach, describe, expect, it } from 'vitest'
import { beforeAll } from 'vitest'
import { fail } from 'assert'

import { Rate_Type_Enum, Unit_Management_Enum } from '@otiuming/domain-omnidata-types'

import {
  getSdk,
  Get_Product_ListQuery,
  Get_Venue_ListQuery,
  Media_Gallery_Input,
  Media_Gallery_Item_Input,
  Product_Save_Input,
  Scalars,
  Sdk,
  Venue_Facility_Input,
  Venue_Main_Save_Input,
  Get_UspsQuery,
  Venue_Usps_Save_Input,
  Get_Venue_FacilitiesQuery,
} from './generated'
import {
  OrganizationProto,
  SignUpParams,
  createSeedData,
  fakeMultiLanguageSentences,
  fakePlace,
  uploadRandomImages,
  uploadRandomLogos,
} from './common-operations'

import { getValidatedEnv } from './env'

const fullFileName = __filename
const baseFileName = basename(fullFileName)

const shouldRunThisFile = process.argv.filter((a) => a.includes(baseFileName))

if (!shouldRunThisFile) exit(0)

if (!env.ADMIN_SECRET) {
  config({
    path: '../.env'
  })
}

const { GRAPHQL_SERVER, ADMIN_SECRET, NHOST_DOMAIN, NHOST_REGION } = getValidatedEnv()

// jest.setTimeout(240_000)

describe('omnidata', () => {
  let graphql: GraphQLClient
  let sdk: Sdk
  let nhost: NhostClient

  let organization_id: string
  let adminSdk: Sdk
  let unauthorizedSdk: Sdk

  beforeAll(async () => {
    expect(GRAPHQL_SERVER).toBeTruthy()
    expect(ADMIN_SECRET).toBeTruthy()
    expect(NHOST_DOMAIN).toBeTruthy()
    expect(NHOST_REGION).toBeTruthy()

    graphql = new GraphQLClient(GRAPHQL_SERVER, {
      headers: {
        'x-hasura-admin-secret': ADMIN_SECRET,
      },
    })

    nhost = new NhostClient({
      subdomain: NHOST_DOMAIN,
      region: NHOST_REGION,
      adminSecret: ADMIN_SECRET
    })

    sdk = getSdk(graphql)

    const getUserSdk = (user: unknown) => {
      const userGraphql = new GraphQLClient(GRAPHQL_SERVER, {
        headers: {
          'x-hasura-admin-secret': ADMIN_SECRET,
          'x-hasura-user-id': `${user}`,
          'x-hasura-role': 'user'
        },
      })

      return getSdk(userGraphql)
    }

    const signUpParams: SignUpParams = {
      email: faker.internet.email(),
      password: faker.random.alphaNumeric(10),
    }

    const {
      admin: admin_user_id,
      response,
      organization,
    } = await createSeedData(
      nhost,
      sdk,
      graphql,
      getUserSdk,
      {
        admin: signUpParams,
        settings: {
          name: faker.company.name(),
        } as unknown as OrganizationProto['settings']
      })

    expect(response.insert_organization_one).toBeTruthy()

    organization_id = organization.organization.id

    adminSdk = getSdk(
      new GraphQLClient(GRAPHQL_SERVER, {
        headers: {
          'x-hasura-admin-secret': ADMIN_SECRET,
          'x-hasura-role': 'user',
          'x-hasura-user-id': admin_user_id,
        },
        errorPolicy: 'ignore',
      })
    )

    unauthorizedSdk = getSdk(
      new GraphQLClient(GRAPHQL_SERVER, {
        headers: {
          'x-hasura-admin-secret': ADMIN_SECRET,
          'x-hasura-role': 'user',
          'x-hasura-user-id': uuid(),
        },
        errorPolicy: 'ignore',
      })
    )
  })

  afterAll(async () => {
    await sdk.cleanup({
      organization_id,
    })

    await nhost.auth.signOut()
  })

  it('can get created organization', async () => {
    const organization = await getOrganization()

    expect(organization?.id).toBeTruthy()
  })

  async function getOrganization() {
    const { organization } = await sdk.get_organization({ organization_id })
    if (!organization) 
      fail()

    return organization
  }

  it('can save settings if admin', async () => {
    const organization = await getOrganization()

    const result = await adminSdk.organization_settings_save({
      organization: {
        id: organization.id,
        name: organization.name,
        headline: organization.headline,
        sites: organization.sites,
        socials: organization.socials,
      },
    })

    expect(result.organization_settings_save).toBeTruthy()
  })

  it('cannot save settings if not authorized', async () => {
    const organization = await getOrganization()

    try {
      await unauthorizedSdk.organization_settings_save({
        organization: {
          id: organization.id,
          name: organization.name,
          headline: organization.headline,
          sites: organization.sites,
          socials: organization.socials,
        },
      })
    }
    catch (error) {
      expect(error.response.errors).toBeTruthy()
      return
    }

    fail()

    // expect(result.organization_settings_save).toBeFalsy()
  })

  it('can save branding if admin', async () => {
    // TODO: Fix image leak here
    const organization = await getOrganization()

    const branding_images = uploadRandomLogos(nhost)

    const result = await adminSdk.organization_branding_save({
      branding: {
        id: organization_id,
        logo_id: branding_images[0],
        logo_light_id: branding_images[1],
        favicon_id: branding_images[2],
        meta_title: {
          id: organization.branding.meta_title.id,
          ...fakeMultiLanguageSentences({ preffix: 'branding.metaTitle' }),
        },
        meta_description: {
          id: organization.branding?.meta_description?.id,
          ...fakeMultiLanguageSentences({ preffix: 'branding.metaDescription' }),
        },
      },
    })

    expect(result?.organization_branding_save).toBeTruthy()
    const filesExpectedToHaveBeenDeleted = [
      organization.branding.logo_id,
      organization.branding.logo_light_id,
      organization.branding.favicon_id,
    ]
    const getFilesTasks = filesExpectedToHaveBeenDeleted
      .map((file_id) => nhost.storage.getPublicUrl({ fileId: file_id }))
      .map((url) => fetch(url))
    const getFilesResults = await Promise.all(getFilesTasks)
    expect(getFilesResults.every((r) => r.status === 404)).toBeTruthy()
  })

  describe('venue operations', () => {
    // TODO: There is a single image leak here
    let venue: Get_Venue_ListQuery['venue'][0]
    let id: Scalars['uuid']['input']

    beforeAll(async () => {
      const venues = await sdk.get_venue_list({
        organization_id,
      })
      venue = venues.venue[0]
      id = venue.id
    })

    it('can save venue main if admin', async () => {
      const changedVenue: Venue_Main_Save_Input = {
        id,
        description: fakeMultiLanguageSentences({ preffix: 'description' }),
        good_to_know: fakeMultiLanguageSentences({ preffix: 'goodToKnow' }),
        place: fakePlace(),
      }

      await adminSdk.venue_main_save({
        venue: changedVenue,
      })

      const { venue_by_pk: venueAfterChange } = await sdk.get_venue({
        id,
      })

      expect(venueAfterChange?.place?.name).toEqual(changedVenue?.place?.name)
      expect(venueAfterChange?.description?.en).toEqual(
        changedVenue.description.en
      )
      expect(venueAfterChange?.good_to_know?.en).toEqual(
        changedVenue.good_to_know.en
      )
    })

    // TODO: Bring gallery tests back
    // it('can save venue gallery if admin', async () => {
    //   const {
    //     venue_by_pk: { gallery: gallery_before },
    //   } = await sdk.get_venue({
    //     id,
    //   })
    //   const newImages = await uploadRandomImages(nhost, 5)

    //   const modifiedGallery = {
    //     id: gallery_before?.id,
    //     items: newImages.map((file_id) => ({
    //       file_id,
    //     })),
    //   }

    //   await adminSdk.venue_gallery_save({
    //     arg: {
    //       id,
    //       gallery: modifiedGallery,
    //     },
    //   })

    //   const {
    //     venue_by_pk: { gallery: gallery_after },
    //   } = await sdk.get_venue({
    //     id,
    //   })

    //   expect(gallery_after?.items?.map((i) => i.file_id)).toEqual(newImages)

    //   const filesExpectedToHaveBeenDeleted = gallery_before?.items?.map(
    //     (i) => i.file_id
    //   ) || []
    //   const getFilesTasks = filesExpectedToHaveBeenDeleted
    //     .map((file_id) => nhost.storage.getPublicUrl({ fileId: file_id }))
    //     .map((url) => fetch(url))
    //   const getFilesResults = await Promise.all(getFilesTasks)
    //   expect(getFilesResults.every((r) => r.status === 404)).toBeTruthy()
    // })

    describe('saving usps', () => {
      let usps_before: Get_UspsQuery
      let usps_after: Get_UspsQuery
      let image_id: Scalars['uuid']['input']
      let lines: Venue_Usps_Save_Input['lines']

      beforeAll(async () => {
        usps_before = await sdk.get_usps({ id: venue.usps_id })

        const images = await uploadRandomImages(nhost, 1)
        image_id = images[0]

        lines = [1, 2, 3].map(() => ({
          name: fakeMultiLanguageSentences({ preffix: 'usps.line.name' }),
          headline: fakeMultiLanguageSentences({ preffix: 'usps.line.headline' }),
        }))

        await adminSdk.venue_usps_save({
          arg: {
            id,
            image_id,
            lines,
          },
        })

        usps_after = await sdk.get_usps({ id: venue.usps_id })
      })

      it('changes the image', () => {
        expect(usps_before.venue_usps_by_pk?.image_id).not.toEqual(
          usps_after.venue_usps_by_pk?.image_id
        )
        expect(usps_after.venue_usps_by_pk?.image_id).toEqual(image_id)
      })

      it('changes the lines headlines', () => {
        expect(usps_before.venue_usps_by_pk?.lines).not.toEqual(
          usps_after.venue_usps_by_pk?.lines
        )
        expect(
          usps_after.venue_usps_by_pk?.lines?.map((l) => l.headline?.en)
        ).toEqual(lines.map((l) => l.headline.en))
        expect(
          usps_after.venue_usps_by_pk?.lines?.map((l) => l.headline?.es)
        ).toEqual(lines.map((l) => l.headline.es))
        expect(
          usps_after.venue_usps_by_pk?.lines?.map((l) => l.headline?.fr)
        ).toEqual(lines.map((l) => l.headline.fr))
        expect(
          usps_after.venue_usps_by_pk?.lines?.map((l) => l.headline?.de)
        ).toEqual(lines.map((l) => l.headline.de))
      })

      it('changes the lines name', () => {
        expect(usps_before.venue_usps_by_pk?.lines).not.toEqual(
          usps_after.venue_usps_by_pk?.lines
        )
        expect(usps_after.venue_usps_by_pk?.lines?.map((l) => l.name.en)).toEqual(
          lines.map((l) => l.name.en)
        )
        expect(usps_after.venue_usps_by_pk?.lines?.map((l) => l.name.es)).toEqual(
          lines.map((l) => l.name.es)
        )
        expect(usps_after.venue_usps_by_pk?.lines?.map((l) => l.name.fr)).toEqual(
          lines.map((l) => l.name.fr)
        )
        expect(usps_after.venue_usps_by_pk?.lines?.map((l) => l.name.de)).toEqual(
          lines.map((l) => l.name.de)
        )
      })

      it('deletes the old image', async () => {
        const file_id = usps_before.venue_usps_by_pk?.image_id
        if (!file_id) return
        
        const url = nhost.storage.getPublicUrl({ fileId: file_id })
        const response = await fetch(url)
        expect(response.status).toEqual(404)
      })
    })

    describe('saving facilities', () => {
      let venue_facilitiies_before: Get_Venue_FacilitiesQuery
      let venue_facilitiies_after: Get_Venue_FacilitiesQuery

      let expectedNewImages: Scalars['uuid']['input'][]
      let expectedNewFacilities: Venue_Facility_Input[]

      beforeAll(async () => {
        venue_facilitiies_before = await sdk.get_venue_facilities({
          venue_id: venue.id,
        })

        expectedNewImages = await uploadRandomImages(nhost, 3)

        expectedNewFacilities = expectedNewImages.map((image_id) => ({
          image_id,
          name: fakeMultiLanguageSentences({ preffix: 'facility.name' }),
          headline: fakeMultiLanguageSentences({ preffix: 'facility.headline' }),
        }))

        await adminSdk.venue_facilities_save({
          arg: {
            id,
            items: expectedNewFacilities,
          },
        })

        venue_facilitiies_after = await sdk.get_venue_facilities({
          venue_id: venue.id,
        })
      })

      it('has venues before', async () => {
        expect(venue_facilitiies_before.venue_facility?.length).toBeGreaterThan(0)
      })

      it('can save venue facilities if admin', async () => {
        expect(venue_facilitiies_after.venue_facility?.map((f) => f.image_id).sort()).toEqual(
          expectedNewImages.sort()
        )
        expect(venue_facilitiies_after.venue_facility?.map((f) => f.name.en).sort()).toEqual(
          expectedNewFacilities.map((f) => f.name.en).sort()
        )
        expect(
          venue_facilitiies_after.venue_facility?.map((f) => f.headline.en).sort()
        ).toEqual(expectedNewFacilities.map((f) => f.headline.en).sort())
      })

      // it('deletes the old images', async () => {
      //   const getFilesTasks = venue_facilitiies_before.venue_facility
      //     ?.map((f) => f.image_id)
      //     .map((file_id) => nhost.storage.getPublicUrl({ fileId: file_id }))
      //     .map((url) => 
      //       fetch(url, {  })
      //   ) || []
      //   const getFilesResults = await Promise.all(getFilesTasks)
      //   expect(getFilesResults.every((r) => r.status === 404)).toBeTruthy()
      // })
    })
  })

  describe('product operations', () => {
    // There is a single image leak here
    let product: Get_Product_ListQuery['product'][0]
    let id: Scalars['uuid']['input']

    beforeEach(async () => {
      const products = await sdk.get_product_list({
        organization_id,
      })
      product = products.product[0]
      id = product.id
    })

    it('can save if admin', async () => {
      const gallery_id = product.gallery_id
      const { product_by_pk: product_before } = await sdk.get_product({ id })

      const newImages = await uploadRandomImages(nhost, 3)

      const items: Media_Gallery_Item_Input[] = newImages.map((file_id) => ({
        file_id,
      }))

      const gallery: Media_Gallery_Input = {
        id: gallery_id,
        items,
      }

      const productToBeSaved: Product_Save_Input = {
        id,
        description: fakeMultiLanguageSentences({ preffix: 'product.description' }),
        headline: fakeMultiLanguageSentences({ preffix: 'product.headline' }),
        name: fakeMultiLanguageSentences({ preffix: 'product.name' }),
        published: true,
        business_model: {
          time_management: Rate_Type_Enum.TimeSlots,
          unit_management: Unit_Management_Enum.PerPax
        },
        gallery,
        price_from: random(10, 50),
      }

      await adminSdk.product_save({
        product: productToBeSaved,
      })

      const { product_by_pk: product_after } = await sdk.get_product({ id })

      expect(product_after?.gallery?.items?.map((i) => i.file_id).sort()).toEqual(
        newImages.sort()
      )
      expect(product_after?.name?.en).toEqual(productToBeSaved.name.en)
      expect(product_after?.headline?.en).toEqual(productToBeSaved.headline.en)
      expect(product_after?.description?.en).toEqual(
        productToBeSaved.description.en
      )
      expect(product_after?.price_from).toEqual(productToBeSaved.price_from)

      const filesExpectedToHaveBeenDeleted = product_before?.gallery?.items?.map(
        (i) => i.file_id
      ) || []
      const getFilesTasks = filesExpectedToHaveBeenDeleted
        .map((file_id) => nhost.storage.getPublicUrl({ fileId: file_id }))
        .map((url) => fetch(url))
      const getFilesResults = await Promise.all(getFilesTasks)
      expect(getFilesResults.every((r) => r.status === 404)).toBeTruthy()
    })
  })

  describe('my web', () => {
    it('can save if admin', async () => {
      const section_id = _.kebabCase(faker.lorem.sentence())
      const value = {
        bear: faker.animal.bear(),
        cat: faker.animal.cat(),
      }

      await adminSdk.my_web_section_save({
        section: {
          organization_id,
          section_id,
          value,
        },
      })

      const modified = await sdk.get_my_web_section({
        organization_id,
        section_id,
      })

      expect(modified.my_web_section_by_pk?.value).toEqual(value)
    })
  })

  describe('product groups', () => {
    it('can save', async () => {
      const id = uuid()
      const name = fakeMultiLanguageSentences({ preffix: 'productGroup.name' })
      const headline = fakeMultiLanguageSentences({ preffix: 'productGroup.headline' })
      const description = fakeMultiLanguageSentences({ preffix: 'productGroup.description' })
      const [image] = await uploadRandomImages(nhost, 1)
      
      await adminSdk.product_group_save({
        product_group: {
          organization_id,
          id,
          name,
          headline,
          description,
          image_id: image,
          products: [],
        }
      })

      const { product_group } = await adminSdk.get_product_group({
        id
      })

      expect(product_group).toBeDefined()
      expect(product_group?.name.en).toEqual(name.en)
      expect(product_group?.headline?.en).toEqual(headline.en)
      expect(product_group?.description?.en).toEqual(description.en)
    })
  })
})
