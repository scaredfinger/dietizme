import * as Sentry from '@sentry/nextjs'
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { Future, Result, Option } from "@swan-io/boxed";

import { ExecuteQueryError } from '@otiuming/utils-graphql'
import { logger } from "@otiuming/utils-logging";

import { clientConfig } from "@/config";
import { initializeApollo } from "@/data-access";

type Fn<Props> = (client: ApolloClient<NormalizedCacheObject>, context: GetStaticPropsContext) => Future<Result<Option<Props>, ExecuteQueryError>>

interface Options {
  revalidate?: number
  tags: {
    page: string;
    func: string;
  }
}

export const createGetStaticProps =
<Props>({ tags, revalidate = 60 }: Options) => (fn: Fn<Props>): GetStaticProps<Props> => {

    return async (context: GetStaticPropsContext) => {
      const NOT_FOUND = {
        notFound: true,
        props: null as Props | null,
        revalidate: 60
      }

      const client = initializeApollo('OTIUMING_MAIN', clientConfig.graphql)

      const fnResult = fn(client, context)

      fnResult.tapError((error) => {
        logger.debug({
          eventId: 'GET_SATIC_PROPS_ERROR',
          error,
          tags,
        })

        Sentry.captureException(error, {
          tags,
        })
      })

      const result = await fnResult

      return result.match({
        Ok: (maybeProps) => maybeProps.match({
          None: () => NOT_FOUND,
          Some: (props) => ({
            props,
            revalidate
          })
        }),
        Error: () => NOT_FOUND
      })
    }
  }