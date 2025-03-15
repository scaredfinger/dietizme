import { useMemo } from 'react'
import { DateTime } from 'luxon'
import _ from 'lodash'
// import * as Sentry from '@sentry/nextjs'

import { logger } from '@otiuming/utils-logging'
import { useImageUrlFunction } from '@otiuming/ui-common'
import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

import { initializeApollo } from '../data-access'
import { clientConfig } from '../config'

export function dateFormat(data: Date | DateTime) {
  const asDate = _.isDate(data) ? data : (data as DateTime).toJSDate()
  return asDate && asDate.toString()
}

// Sentry.init(clientConfig.sentry)

export const execureOnServerSide =
  (tags: { page: string; func: string }) =>
  async <Result>(
    fn: (client: ApolloClient<NormalizedCacheObject>) => Promise<Result>,
  ) => {
    try {
      const client = initializeApollo('OTIUMING_MAIN', clientConfig.graphql)
      return await fn(client)
    } catch (error) {
      logger.debug({
        eventId: 'SENTRY_WATCHED_FUNCTION_EXECUTION_ERROR',
        error,
        sentry: clientConfig.sentry,
        tags,
      })
      // Sentry.captureException(error, {
      //   tags,
      // })
      throw error
    }
  }

export function useImageThumbailUrlFunction() {
  const imageUrl = useImageUrlFunction()
  return useMemo(
    () => (fileId: string) =>
      imageUrl(
        fileId,
        clientConfig.imageSizes.xsmall,
        clientConfig.imageQualities.medium,
      ),
    [imageUrl],
  )
}

export function useImageMediumUrlFunction() {
  const imageUrl = useImageUrlFunction()
  return useMemo(
    () => (fileId: string) =>
      imageUrl(
        fileId,
        clientConfig.imageSizes.medium,
        clientConfig.imageQualities.high,
      ),
    [imageUrl],
  )
}

export function useImageLargeUrlFunction() {
  const imageUrl = useImageUrlFunction()
  return useMemo(
    () => (fileId: string) =>
      imageUrl(
        fileId,
        clientConfig.imageSizes.large,
        clientConfig.imageQualities.high,
      ),
    [imageUrl],
  )
}
