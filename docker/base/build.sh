#!/bin/sh

IMAGE_TAG="exercism:base"
SCRIPT_DIRECTORY="$( cd "$( dirname "${0}" )" && pwd )"

EXERCISM_TOKEN=${1}

docker build \
  --build-arg EXERCISM_TOKEN=${EXERCISM_TOKEN} \
  -t ${IMAGE_TAG} \
  ${SCRIPT_DIRECTORY}
