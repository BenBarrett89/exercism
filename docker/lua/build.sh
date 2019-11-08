#!/bin/sh

IMAGE_TAG="exercism:lua"
SCRIPT_DIRECTORY="$( cd "$( dirname "${0}" )" && pwd )"

docker build \
  -t ${IMAGE_TAG} \
  ${SCRIPT_DIRECTORY}
