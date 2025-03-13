import _ from 'lodash'

import { using as buildingUsing, OperationRequest, OperationResponse } from '@otiuming/biz-builder'
import { Activate_Organization_Features_Input } from '@otiuming/domain-omnidata-types'
import { Save_Product_Features_Input } from '@otiuming/domain-omnidata-types'

import {
  Booking_Accept_Input,
  Booking_Add_Note_Input,
  Booking_Cancel_Input,
  Booking_Create_Input,
  Booking_Reject_Input,
  Cleanup_Input,
  Contact_Input,
  Get_Booking_Input,
  My_Web_Section_Save_Input,
  Organization_Booking_Questions_Save_Input,
  Organization_Branding_Save_Input,
  Organization_Create_Input,
  Organization_Settings_Save_Input,
  Product_Create_Input,
  Product_Group_Save_Input,
  Product_Save_Input,
  Rate_Create_Input,
  Rate_Save_Input,
  Sdk,
  Supplement_Create_Input,
  Supplement_Save_Input,
  Update_Booking_Version_With_Optimistic_Lock_Input,
  Venue_Facilities_Save_Input,
  Venue_Gallery_Save_Input,
  Venue_Main_Save_Input,
  Venue_Usps_Save_Input,
} from '../../generated'
import { Logger } from '../../logger'
import { createMissingDomains } from './connectors'

import {
  allowAnything,
  and,
  hasPermissionsAdminPermissions,
  isGod,
  noValidation,
  organizationExists,
  thereIsNoOrganizationWithSameName,
  userExists,
  userHasNoOrganization,
} from '../validation'

import {
  organization,
  userAndId,
  nameAndOwnerEmail,
  userAndOrganization,
  userOrganizationAndId,
} from './preload-input-builders'
import {
  buildActivateOrganizationFeatures,
  buildBookingCreateBuildLoadContextVariables,
  buildCleanupInput,
  buildCreateProductInput,
  buildGetBookingPersistVariables,
  buildMyWebSave,
  buildNewRateUpsertInput,
  buildOrganizationQuestionsSave,
  buildProductGroupSaveInput,
  buildProductSaveInput,
  buildSaveFeaturesUpsertInput,
  buildSaveRateInput,
  buildUpsertBookingVars,
  buildVenueFacilitiesSaveInput,
  buildVenueGallerySaveInput,
  buildVenueSaveInput,
  buildVenueUspsSaveInput,
  cleanupBrandingImages,
  cleanupFacilitiesImages,
  cleanupOrganizationFiles,
  cleanupUsps,
  createScaffoldOrganization,
  organizationBranding,
  organizationSettings,
  organizationUserAndProduct,
  sendBookingCreatedEmails,
  sendContactReceivedEmail,
  userOrganizationAndCategoryIds,
  validateBookingCreate,
  validateGetBooking
} from './operations'
import { deleteFiles } from './connectors/nhost'
import { cleanupVenueImages } from './operations/venue/cleanup_venue_images'
import { buildLoadContextVersionUpdate } from './operations/bookings/version/build-load-context'
import { versionUpdated } from './operations/bookings/version/version-updated'
import { bookingCanBeUpdatedByCurrentUser } from './operations/bookings/booking-can-be-updated-by-currrent-user'
import { buildAddBookingNoteSaveInput } from './operations/bookings/add-note/build-persist-variables'
import { buildAcceptBookingSaveInput } from './operations/bookings/accept/build-persist-variables'
import { buildRejectBookingSaveInput } from './operations/bookings/reject/build-persist-variables'
import { buildCancelBookingSaveInput } from './operations/bookings/cancel/build-persist-variables'
import { buildCreateSupplementInput } from './operations/supplements'
import { buildSaveSupplementInput } from './operations/supplements/save'

export class BizImplementation {
  constructor(private logger: Logger, private sdk: Sdk) { }

  private using<Body>() {
    return buildingUsing<Body, Sdk>(this.sdk, this.logger)
  }

  public organizationSettingsSave(
    request: OperationRequest<Organization_Settings_Save_Input>
  ): OperationResponse {
    return this.using<Organization_Settings_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_organization_settings_save)
      .validateWith(and(hasPermissionsAdminPermissions))
      .buildPersistVariablesWith(organizationSettings)
      .persistWith((d) => d.upsert_organization)
      .whenDone((b, c, v) => {
        this.logger.info({ eventId: 'DONE' })
        return createMissingDomains(b, c, v)
      })
      .execute(request)
  }

  public organizationBrandingSave(
    request: OperationRequest<Organization_Branding_Save_Input>
  ): OperationResponse {
    return this.using<Organization_Branding_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_organization_branding_save)
      .validateWith(and(hasPermissionsAdminPermissions))
      .buildPersistVariablesWith(organizationBranding)
      .persistWith((d) => d.upsert_organization_branding)
      .whenDone(cleanupBrandingImages)
      .execute(request)
  }

  public organizationCreate(
    request: OperationRequest<Organization_Create_Input>
  ): OperationResponse {
    return this.using<Organization_Create_Input>()
      .buildLoadContextVariablesWith(nameAndOwnerEmail)
      .loadContextWith((d) => d.preload_organization_create)
      .validateWith(
        and(
          userHasNoOrganization, 
          thereIsNoOrganizationWithSameName,
          userExists
        )
      )
      .buildPersistVariablesWith(createScaffoldOrganization)
      .persistWith((d) => d.upsert_organization_and_verify_owner)
      .whenDone(createMissingDomains)
      .execute(request)
  }

  public venueMainSave(
    request: OperationRequest<Venue_Main_Save_Input>
  ): OperationResponse {
    return this.using<Venue_Main_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_venue_save)
      .validateWith(and(hasPermissionsAdminPermissions))
      .buildPersistVariablesWith(buildVenueSaveInput)
      .persistWith((d) => d.venue_upsert)
      .execute(request)
  }

  public venueGallerySave(
    request: OperationRequest<Venue_Gallery_Save_Input>
  ): OperationResponse {
    return this.using<Venue_Gallery_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_venue_gallery_save)
      .validateWith(and(hasPermissionsAdminPermissions))
      .buildPersistVariablesWith(buildVenueGallerySaveInput)
      .persistWith((d) => d.venue_gallery_upsert)
      .whenDone(cleanupVenueImages)
      .execute(request)
  }

  public venueUspsSave(
    request: OperationRequest<Venue_Usps_Save_Input>
  ): OperationResponse {
    return this.using<Venue_Usps_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_venue_usps_save)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildVenueUspsSaveInput)
      .persistWith((d) => d.venue_usps_upsert)
      .whenDone(cleanupUsps)
      .execute(request)
  }

  public venueFacilitiesSave(
    request: OperationRequest<Venue_Facilities_Save_Input>
  ): OperationResponse {
    return this.using<Venue_Facilities_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_venue_facilities_save)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildVenueFacilitiesSaveInput)
      .persistWith((d) => d.venue_facilities_upsert)
      .whenDone(cleanupFacilitiesImages)
      .execute(request)
  }

  public productSave(
    request: OperationRequest<Product_Save_Input>
  ): OperationResponse {
    return this.using<Product_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_product_save)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildProductSaveInput)
      .persistWith((d) => d.product_upsert)
      .whenDone((request, context, v) => {
        const newFiles = request.body.gallery?.items?.map((i) => i.file_id)
        const existingFiles = context.product_by_pk.gallery.items.map(
          (i) => i.file_id
        )
        const toBeDeleted = existingFiles.filter((f) => !newFiles.includes(f))

        return deleteFiles(toBeDeleted)
      })
      .execute(request)
  }

  public myWebSectionSave(
    request: OperationRequest<My_Web_Section_Save_Input>
  ): OperationResponse {
    return this.using<My_Web_Section_Save_Input>()
      .buildLoadContextVariablesWith(userAndOrganization)
      .loadContextWith((d) => d.preload_my_web_section_save)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildMyWebSave)
      .persistWith((d) => d.my_web_section_upsert)
      .execute(request)
  }

  public organizationBookingQuestionsSave(
    request: OperationRequest<Organization_Booking_Questions_Save_Input>
  ): OperationResponse {
    return this.using<any>()
      .buildLoadContextVariablesWith(userAndOrganization)
      .loadContextWith((d) => d.preload_organization_booking_questions_save)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildOrganizationQuestionsSave)
      .persistWith((d) => d.upsert_booking_questions)
      .execute(request)
  }

  public contact(request: OperationRequest<Contact_Input>): OperationResponse {
    return this.using<Contact_Input>()
      .buildLoadContextVariablesWith(organization)
      .loadContextWith((d) => d.preload_contact)
      .validateWith(allowAnything)
      .buildPersistVariablesWith(() => ({}))
      .persistWith((d) => d.noop)
      .whenDone(sendContactReceivedEmail)
      .execute(request)
  }

  public createProduct(
    request: OperationRequest<Product_Create_Input>
  ): OperationResponse {
    return this.using<Product_Create_Input>()
      .buildLoadContextVariablesWith(userAndOrganization)
      .loadContextWith((d) => d.preload_create_product)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildCreateProductInput)
      .persistWith((d) => d.product_upsert)
      .execute(request)
  }

  public createRate(
    request: OperationRequest<Rate_Create_Input>
  ): OperationResponse {
    return this.using<Rate_Create_Input>()
      .buildLoadContextVariablesWith(userAndOrganization)
      .loadContextWith((d) => d.preload_create_rate)
      .validateWith(
        organizationExists,
        hasPermissionsAdminPermissions
      )
      .buildPersistVariablesWith(buildNewRateUpsertInput)
      .persistWith((d) => d.rate_upsert)
      .execute(request)
  }

  public rateSave(
    request: OperationRequest<Rate_Save_Input>
  ): OperationResponse {
    return this.using<Rate_Save_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith((d) => d.preload_save_rate)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildSaveRateInput)
      .persistWith((d) => d.rate_upsert)
      .execute(request)
  }

  public cleanup(request: OperationRequest<Cleanup_Input>): OperationResponse {
    return this.using<Cleanup_Input>()
      .buildLoadContextVariablesWith(organization)
      .loadContextWith((d) => d.preload_cleanup)
      .validateWith(isGod)
      .buildPersistVariablesWith(buildCleanupInput)
      .persistWith((d) => d.delete_organization)
      .whenDone(cleanupOrganizationFiles)
      .execute(request)
  }

  public bookingCreate(request: OperationRequest<Booking_Create_Input>): OperationResponse {
    return this.using<Booking_Create_Input>()
      .buildLoadContextVariablesWith(buildBookingCreateBuildLoadContextVariables)
      .loadContextWith((d) => d.preload_booking_create)
      .validateWith(
        and(
          organizationExists,
          validateBookingCreate
        )
      )
      .buildPersistVariablesWith(buildUpsertBookingVars)
      .persistWith((d) => d.booking_upsert)
      .whenDone(sendBookingCreatedEmails)
      .execute(request)
  }

  public test(request: OperationRequest<any>): OperationResponse {
    return this.using<any>()
      .buildLoadContextVariablesWith(() => ({}))
      .loadContextWith(() => () => Promise.resolve({}))
      .validateWith(noValidation)
      .buildPersistVariablesWith(() => ({}))
      .persistWith(() => () => Promise.resolve({}))
      .whenDone(cleanupOrganizationFiles)
      .execute(request)
  }

  public getBooking(request: OperationRequest<Get_Booking_Input>): OperationResponse {
    return this.using<Get_Booking_Input>()
      .buildLoadContextVariablesWith(r => r.body)
      .loadContextWith(d => d.preload_get_booking)
      .validateWith(validateGetBooking)
      .buildPersistVariablesWith(buildGetBookingPersistVariables)
      .persistWith(d => d.get_booking)
      .execute(request)
  }

  public testError(request: OperationRequest<any>): OperationResponse {
    return this.using<any>()
      .buildLoadContextVariablesWith(() => ({}))
      .loadContextWith(() => () => Promise.resolve({}))
      .validateWith(noValidation)
      .buildPersistVariablesWith(() => ({}))
      .persistWith(() => () => Promise.reject(Error('Simulated error')))
      .execute(request)
  }

  public productGroupSave(request: OperationRequest<Product_Group_Save_Input>): OperationResponse {
    return this.using<Product_Group_Save_Input>()
      .buildLoadContextVariablesWith(userOrganizationAndId)
      .loadContextWith(d => d.preload_product_group_save)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildProductGroupSaveInput)
      .persistWith(d => d.product_group_upsert)
      .execute(request)
  }

  public updateBookingVersionWithOptimisticLock(
    request: OperationRequest<Update_Booking_Version_With_Optimistic_Lock_Input>
  ): OperationResponse {
    return this.using<Update_Booking_Version_With_Optimistic_Lock_Input>()
      .buildLoadContextVariablesWith(buildLoadContextVersionUpdate)
      .loadContextWith(d => d.preload_booking_update_version)
      .validateWith(versionUpdated)
      .buildPersistVariablesWith(_.noop)
      .persistWith(d => () => Promise.resolve({}))
      .execute(request)
  }

  public bookingAddNote(
    request: OperationRequest<Booking_Add_Note_Input>
  ): OperationResponse {
    return this.using<Booking_Add_Note_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith(d => d.preload_booking_update)
      .validateWith(bookingCanBeUpdatedByCurrentUser)
      .buildPersistVariablesWith(buildAddBookingNoteSaveInput)
      .persistWith(d => d.update_booking)
      .execute(request)
  }

  public bookingAccept(
    request: OperationRequest<Booking_Accept_Input>
  ): OperationResponse {
    return this.using<Booking_Accept_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith(d => d.preload_booking_update)
      .validateWith(bookingCanBeUpdatedByCurrentUser)
      .buildPersistVariablesWith(buildAcceptBookingSaveInput)
      .persistWith(d => d.update_booking)
      .execute(request)
  }

  public bookingReject(
    request: OperationRequest<Booking_Reject_Input>
  ): OperationResponse {
    return this.using<Booking_Reject_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith(d => d.preload_booking_update)
      .validateWith(bookingCanBeUpdatedByCurrentUser)
      .buildPersistVariablesWith(buildRejectBookingSaveInput)
      .persistWith(d => d.update_booking)
      .execute(request)
  }

  public bookingCancel(
    request: OperationRequest<Booking_Cancel_Input>
  ): OperationResponse {
    return this.using<Booking_Cancel_Input>()
      .buildLoadContextVariablesWith(userAndId)
      .loadContextWith(d => d.preload_booking_update)
      .validateWith(bookingCanBeUpdatedByCurrentUser)
      .buildPersistVariablesWith(buildCancelBookingSaveInput)
      .persistWith(d => d.update_booking)
      .execute(request)
  }

  public supplementCreate(
    request: OperationRequest<Supplement_Create_Input>
  ): OperationResponse {
    return this.using<Supplement_Create_Input>()
      .buildLoadContextVariablesWith(userAndOrganization)
      .loadContextWith(d => d.preload_create_supplement)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildCreateSupplementInput)
      .persistWith(d => d.supplement_upsert)
      .execute(request)
  }

  public supplementSave(
    request: OperationRequest<Supplement_Save_Input>
  ): OperationResponse {
    return this.using<Supplement_Save_Input>()
      .buildLoadContextVariablesWith(userOrganizationAndId)
      .loadContextWith(d => d.preload_save_supplement)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildSaveSupplementInput)
      .persistWith(d => d.supplement_upsert)
      .execute(request)
  }

  public activateOrganizationFeatures(
    request: OperationRequest<Activate_Organization_Features_Input>
  ): OperationResponse {
    return this.using<Activate_Organization_Features_Input>()
      .buildLoadContextVariablesWith(userOrganizationAndCategoryIds)
      .loadContextWith(d => d.preload_activate_organization_features)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildActivateOrganizationFeatures)
      .persistWith(d => d.upsert_organization_features)
      .execute(request)
  }

  public saveProductFeatures(
    request: OperationRequest<Save_Product_Features_Input>
  ): OperationResponse {
    return this.using<Save_Product_Features_Input>()
      .buildLoadContextVariablesWith(organizationUserAndProduct)
      .loadContextWith(d => d.preload_save_product_features)
      .validateWith(hasPermissionsAdminPermissions)
      .buildPersistVariablesWith(buildSaveFeaturesUpsertInput)
      .persistWith(d => d.save_product_features)
      .execute(request)
  }
}
