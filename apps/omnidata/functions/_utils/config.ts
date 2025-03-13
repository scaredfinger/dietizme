import { env } from 'process'

export const config = {
  logging: {
    level: env.LOG_LEVEL || 'debug',
  },
  omnidataBackend: env.NHOST_GRAPHQL_URL,
  omnidataAdminSecret: env.WORK_AROUND_HASURA_GRAPHQL_ADMIN_SECRET,
  sendGrid: env.SENDGRID_API_KEY,
  nhostDomain: env.NHOST_SUBDOMAIN,
  nohstRegion: env.NHOST_REGION,
  vercelApiToken: env.VERCEL_API_TOKEN,
  vercelProjectId: env.VERCEL_PROJECT_ID,
  mailjetKey: env.MAILJET_API_KEY,
  mailjetSecret: env.MAILJET_API_SECRET,
  environment: env.ENVIRONMENT,
}
