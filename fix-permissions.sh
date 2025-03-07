docker run \
  --rm \
  --volume "$(pwd):/src" \
  alpine \
  chown -R "$(id -u $USER):$(id -g $GROUP)" /src