./stop.sh
./fix-permissions.sh

docker run \
  --volume "$(pwd):/src" \
  --rm \
  alpine rm -rf /src/.nhost

docker run \
  --volume "$(pwd):/src" \
  --rm \
  alpine rm -rf /src/dist/.nhost

docker volume rm -f $(docker volume ls -q | grep omnidata)
docker volume rm -f $(docker volume ls -q | grep dist)