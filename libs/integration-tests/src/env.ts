import joi from 'joi';
import { env } from 'process'

interface EnvVariables {
  GRAPHQL_SERVER: string
  ADMIN_SECRET: string
  NHOST_DOMAIN: string
  NHOST_REGION: string

}

const objectSchema = {
  GRAPHQL_SERVER: joi.string().required(),
  ADMIN_SECRET: joi.string().required(),
  NHOST_DOMAIN: joi.string().required(),
  NHOST_REGION: joi.string()
    .allow('')
    .default(''),
}

const validationSchema = joi
  .object<EnvVariables>(objectSchema)
  .unknown(true);

// Because Next.js requires us to spell out the properties
export const getValidatedEnv = () => {
  const validation = validationSchema.validate(env);
  if (validation.error) {
    throw new Error(validation.error.message);
  }
  return validation.value;
};
