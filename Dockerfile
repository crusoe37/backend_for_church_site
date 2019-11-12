FROM node:10-alpine

LABEL maintainer="Anton Klymenko"

WORKDIR /app
COPY package.json /app
RUN npm install --no-progress && rm -rf /root/.npm /tmp/npm*
