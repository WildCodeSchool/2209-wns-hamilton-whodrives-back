FROM node:lts-alpine

RUN mkdir app
WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

RUN npm install


COPY src src
COPY uploads uploads
COPY public public


CMD npm start
