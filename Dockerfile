FROM node:latest
WORKDIR /cache
COPY package.json /cache/package.json
COPY package-lock.json /cache/package-lock.json
RUN npm ci
