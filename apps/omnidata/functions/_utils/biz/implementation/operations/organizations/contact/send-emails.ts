import { OperationRequest } from '@otiuming/biz-builder'

import {
  Booking_UpsertMutationVariables,
  Contact_Input,
  Preload_ContactQuery
} from '../../../../../generated'
import { logger } from '../../../../../logger'
import { sendEmail } from '../../../connectors/email'

import { Renderer as ownerCustomerContactReceived } from '@otiuming/email-templates/dist/templates/owner-customer-contact-received'

import { MediaItemResolver, Otiuming } from '../../../formatting-and-resolving-to-be-refactored'

const NOREPLY_EMAIL = 'noreply@otiuming.com'

export async function sendContactReceivedEmail(
  request: OperationRequest<Contact_Input>,
  context: Preload_ContactQuery,
  persistVariables: Booking_UpsertMutationVariables
) {
  const { body } = request
  const { organization_by_pk: organization } = context

  logger.debug({
    eventId: 'CUSTOMER_CONTACT_RECEIVED',
    body,
    request,
    context,
    persistVariables,
  })

  const organizationLanguage = organization?.language ?? 'en'
  const organizationLogo = MediaItemResolver.resolveFileId({
    fileId: organization?.branding.logo_id ?? ''
  })

  try {
    const email = ownerCustomerContactReceived.render({
      customer: {
        email: body.email,
        name: body.name,
        message: body.message,
      },
      company: Otiuming,
      organization: {
        logo: organizationLogo,
        name: organization?.name ?? '',
      }
    }, organizationLanguage)

    logger.debug({
      eventId: 'RENDER_EMAILS',
      email
    })

    await sendEmail({
        to: organization.email,
        from: NOREPLY_EMAIL,
        subject: email.subject,
        html: email.body,
      })
  } catch (error) {
    logger.error({
      eventId: 'RENDER_EMAIL_ERROR',
      error: error.toString(),
    })

    return
  }

}

