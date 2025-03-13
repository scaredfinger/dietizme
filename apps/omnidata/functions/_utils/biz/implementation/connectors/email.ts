import Mailjet, { SendEmailV3_1 } from 'node-mailjet'

import { config } from '../../../config'
import { logger } from '../../../logger'

const mailjet = new Mailjet({
  apiKey: config.mailjetKey,
  apiSecret: config.mailjetSecret,
})

export async function sendEmail(params: { from: string, to: string, subject: string, html: string }) {
  
  const { from, to, subject, html } = params

  const text = html.replace(/(<([^>]+)>)/gi, "")

  const body: SendEmailV3_1.Body = {
    Messages: [
      {
        From: {
          Email: from,
        },
        To: [
          {
            Email: to,
          }
        ],
        Subject: subject,
        HTMLPart: html,
        TextPart: text,
      }
    ]
  }


  logger.debug({
    eventId: 'SEND_EMAIL_REQUEST',
    from,
    to,
    body,
  })

  try {
    await mailjet.post('send', { version: 'v3.1' })
      .request(body)

    logger.info({
      eventId: 'EMAIL_SENT_SUCCESSFULY',
    })
  } catch (error) {
    logger.error({
      eventId: 'SEND_EMAIL_ERROR',
      error: error.toString(),
    })
  }
}
