pnpm nx export-schema omnidata
pnpm nx generate-functions-graphql omnidata
cp apps/omnidata/graphql/schema.graphql schema.graphql

pnpm nx run-many --target update-schema --all --skip-nx-cache

pnpm nx build @dietizme/domain-omnidata-types --skip-nx-cache