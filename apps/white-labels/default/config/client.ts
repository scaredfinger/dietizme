import joi from 'joi'

interface ClientEnvVariables {
  NEXT_PUBLIC_NHOST_REGION: string
  NEXT_PUBLIC_NHOST_SUBDOMAIN: string
  NEXT_PUBLIC_ENVIRONMENT: string
  NEXT_PUBLIC_MAPBOX_TOKEN: string
  NEXT_PUBLIC_GRAPHQL_SERVER: string
  NEXT_PUBLIC_SEARCH_ENGINE_URL: string
  NEXT_PUBLIC_POSTHOG_KEY: string
  NEXT_PUBLIC_POSTHOG_HOST: string
  NEXT_PUBLIC_SENTRY_WHITE_LABEL_DEFAULT_DSN: string
}

const validationSchema = joi.object<ClientEnvVariables>({
  NEXT_PUBLIC_NHOST_REGION: joi.string(),
  NEXT_PUBLIC_NHOST_SUBDOMAIN: joi.string().required(),
  NEXT_PUBLIC_ENVIRONMENT: joi.string().required(),
  NEXT_PUBLIC_MAPBOX_TOKEN: joi.string().required(),
  NEXT_PUBLIC_GRAPHQL_SERVER: joi.string().required(),
  NEXT_PUBLIC_SEARCH_ENGINE_URL: joi.string().required(),
  NEXT_PUBLIC_POSTHOG_KEY: joi.string().required(),
  NEXT_PUBLIC_POSTHOG_HOST: joi.string().required(),
  NEXT_PUBLIC_SENTRY_WHITE_LABEL_DEFAULT_DSN: joi.string().required(),
})

const processEnv: ClientEnvVariables = {
  NEXT_PUBLIC_NHOST_REGION: process.env.NEXT_PUBLIC_NHOST_REGION || undefined,
  NEXT_PUBLIC_NHOST_SUBDOMAIN: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
  NEXT_PUBLIC_ENVIRONMENT: process.env.NEXT_PUBLIC_ENVIRONMENT,
  NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  NEXT_PUBLIC_GRAPHQL_SERVER: process.env.NEXT_PUBLIC_GRAPHQL_SERVER,
  NEXT_PUBLIC_SEARCH_ENGINE_URL: process.env.NEXT_PUBLIC_SEARCH_ENGINE_URL,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST:
    process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
  NEXT_PUBLIC_SENTRY_WHITE_LABEL_DEFAULT_DSN:
    process.env.NEXT_PUBLIC_SENTRY_WHITE_LABEL_DEFAULT_DSN,
}

export const getClientEnv = () => {
  const { error, value } = validationSchema.validate(processEnv, {
    allowUnknown: true,
    stripUnknown: true,
  })

  if (error) {
    throw new Error(`Config validation error: ${error.message}`)
  }

  return value as ClientEnvVariables
}
