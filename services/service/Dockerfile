FROM node:16-alpine3.15

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app
CMD ["yarn", "start"]