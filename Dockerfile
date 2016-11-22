FROM ubuntu:xenial

MAINTAINER Juho Kolehmainen <juho.kolehmainen@iki.fi>

RUN apt-get update && apt-get install -y \
  curl \
  p7zip-full \
  sudo \
&& rm -rf /var/lib/apt/lists/*

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs

RUN npm install forever -g

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src && cp -a /tmp/node_modules /src

ADD . /src
WORKDIR /src

EXPOSE 8000

ENV DEBUG finnish-aip
CMD ["forever", "server.js"]
