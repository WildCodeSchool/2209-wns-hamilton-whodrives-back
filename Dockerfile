FROM node:lts-alpine

RUN apk update && apk add bash git
RUN mkdir app
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY tsconfig.json ./

RUN npm install

COPY .env ./
COPY database.env ./

# COPY database.postgres ./

COPY src src
COPY uploads uploads
COPY public public

CMD npm start