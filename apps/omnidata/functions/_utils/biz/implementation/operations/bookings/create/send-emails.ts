import { OperationRequest } from '@otiuming/biz-builder'

import { Renderer as customerBookingRequestReceivedRenderer } from '@otiuming/email-templates/dist/templates/customer-booking-request-received'
import { Renderer as ownerBookingRequestReceivedRenderer } from '@otiuming/email-templates/dist/templates/owner-booking-request-received'

import { Booking_Create_Input, Booking_UpsertMutationVariables, Preload_Booking_CreateQuery } from '../../../../../generated'
import { logger } from '../../../../../logger'
import { sendEmail } from '../../../connectors/email'

import { MediaItemResolver, IntlFormatter, Otiuming} from '../../../formatting-and-resolving-to-be-refactored'

const NOREPLY_EMAIL = 'noreply@otiuming.com'

export async function sendBookingCreatedEmails(
  request: OperationRequest<Booking_Create_Input>,
  context: Preload_Booking_CreateQuery,
  persistVariables: Booking_UpsertMutationVariables
) {
  const { body: { contact: customer } } = request
  const { organization } = context

  logger.debug({
    eventId: 'SEND_BOOKING_CREATED_EMAILS_REQUEST',
    customer,
    request,
    context,
    persistVariables,
  })

  const currency = organization?.currency ?? 'EUR'
  const organizationLanguage = organization?.language ?? 'en'

  const customerLanguage = request.body.locale ?? 'en' 

  const total = request.body.items.reduce((acc, item) => acc + item.expected_price, 0)
  const totalFormattedForOrganization = IntlFormatter.currency(total, currency, organizationLanguage)
  const totalFormattedForCustomer = IntlFormatter.currency(total, currency, customerLanguage)

  const organizationLogo = MediaItemResolver.resolveFileId({
    fileId: organization?.branding.logo_id ?? ''
  })

  const bookingUrl = MediaItemResolver.revolveBookingUrl({
    organizationDomain: organization?.sites?.[0].url ?? '',
    friendlyBookingId: request.body.friendly_id,
    customerEmail: customer.email,
  })

  const sanitizedOrganizationSocials = {
    facebook: organization?.socials?.facebook ?? '',
    instagram: organization?.socials?.instagram ?? '',
    twitter: organization?.socials?.twitter ?? '',
  }

  try {
    const emailToCustomer = customerBookingRequestReceivedRenderer.render({
      customer: {
        bookingFriendlyId: request.body.friendly_id,
        email: customer.email,
        name: customer.name,
        bookingUrl: bookingUrl,
        total: totalFormattedForCustomer,
      },
      company: Otiuming,
      organization: {
        currency: currency,
        email: organization?.email ?? '',
        id: organization?.id ?? '',
        logo: organizationLogo,
        name: organization?.name ?? '',
        settings: {
          on_request: true,
        },
        ...sanitizedOrganizationSocials,
        phone_number: organization?.phone_number ?? '',
        signature: ''
      }
    }, customerLanguage)

    const emailToOwner = ownerBookingRequestReceivedRenderer.render({
      customer: {
        bookingFriendlyId: request.body.friendly_id,
        email: customer.email,
        name: customer.name,
      },
      booking: {
        total: totalFormattedForOrganization,
        url: bookingUrl,
      },
      company: Otiuming,
      organization: {
        currency: currency,
        email: organization?.email ?? '',
        id: organization?.id ?? '',
        logo: organizationLogo,
        name: organization?.name ?? '',
        settings: {
          on_request: true,
        },
        ...sanitizedOrganizationSocials,
        phone_number: organization?.phone_number ?? '',
        signature: ''
      }
    }, organizationLanguage)

    logger.debug({
      eventId: 'RENDER_EMAILS',
      emailToCustomer,
      emailToOwner,
    })

    const emailPromises = [
      sendEmail({
        to: customer.email,
        from: NOREPLY_EMAIL,
        subject: emailToCustomer.subject,
        html: emailToCustomer.body,
      }),
      sendEmail({
        to: organization.email,
        from: NOREPLY_EMAIL,
        subject: emailToOwner.subject,
        html: emailToOwner.body,
      })
    ]
    await Promise.all(emailPromises)
  } catch (error) {
    logger.error({
      eventId: 'RENDER_EMAIL_ERROR',
      error: error.toString(),
    })

    return
  }

}

