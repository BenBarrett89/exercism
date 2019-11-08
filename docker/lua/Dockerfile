FROM exercism:base

RUN apt-get update
RUN apt-get install -y \
  lua5.3 \
  liblua5.3-dev \
  luarocks

RUN luarocks install busted
