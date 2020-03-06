FROM node:10-alpine

WORKDIR /usr/ap10
COPY package.json package-lock.json ./

RUN npm i -g nodemon
RUN npm i

COPY . .