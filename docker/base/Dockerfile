FROM amd64/ubuntu:bionic

ARG EXERCISM_TOKEN

RUN echo $EXERCISM_TOKEN

RUN apt-get update
RUN apt-get install -y wget

RUN wget \
  --no-verbose \
  https://github.com/exercism/cli/releases/download/v3.0.13/exercism-3.0.13-linux-x86_64.tar.gz

RUN tar \
  -xf \
  exercism-3.0.13-linux-x86_64.tar.gz \
  && mv exercism /bin \
  && rm exercism-3.0.13-linux-x86_64.tar.gz

RUN exercism configure --token=${EXERCISM_TOKEN} --no-verify
