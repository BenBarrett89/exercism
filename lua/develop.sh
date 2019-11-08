#!/bin/sh

IMAGE_TAG="exercism:lua"
CONTAINER_NAME="exercism-lua"
SCRIPT_DIRECTORY="$( cd "$( dirname "${0}" )" && pwd )"

docker run \
  --rm \
  -it \
  --volume ${SCRIPT_DIRECTORY}:/lua \
  --name ${CONTAINER_NAME} \
  ${IMAGE_TAG}
