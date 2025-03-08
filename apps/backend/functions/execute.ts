import { Request, Response } from 'express';

import { createLogger } from '@dietizme/utils-logging'

const logger = createLogger()

export default async function (req: Request, res: Response) {
  logger.info({ eventId: '123', message: 'Hello from the backend!' })

  res.send('Hello from the backend!');
}
