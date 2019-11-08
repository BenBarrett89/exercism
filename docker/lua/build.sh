#!/bin/sh

IMAGE_TAG="exercism:lua"
SCRIPT_DIRECTORY="$( cd "$( dirname "${0}" )" && pwd )"

docker build \
  --tag ${IMAGE_TAG} \
  ${SCRIPT_DIRECTORY}
