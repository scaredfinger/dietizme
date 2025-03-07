source ./.env

docker run \
  --rm \
  --detach \
  --publish ${SEARCH_ENGINE_PORT}:80 \
  --add-host local.hasura.nhost.run:host-gateway \
  --env Hermes__DataFolder:/data \
  --env Hermes__OmnidataAllProducts:https://local.hasura.nhost.run/api/rest/products/availability-and-rates \
  --env Hermes__OmnidataSingleProduct:https://local.hasura.nhost.run/api/rest/products \
  ghcr.io/otiuming-admin/search-engine:75
