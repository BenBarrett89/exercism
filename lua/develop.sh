#!/bin/sh

IMAGE_TAG="exercism:lua"
SCRIPT_DIRECTORY="$( cd "$( dirname "${0}" )" && pwd )"

docker run \
  -it \
   -v ${SCRIPT_DIRECTORY}:/lua \
  ${IMAGE_TAG}
