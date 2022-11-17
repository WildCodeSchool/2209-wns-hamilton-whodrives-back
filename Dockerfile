FROM node:lts-alpine

RUN apk update && apk add bash git
RUN mkdir app
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

COPY tsconfig.json ./

RUN npm install

COPY database.postgres ./

COPY src src

CMD ["db:5433", "--" , "npm","start"]