FROM node:latest
MAINTAINER Prateek

COPY . react:/front
WORKDIR react:/front

VOLUME ["react"]

RUN yarn

EXPOSE 3000
CMD yarn start
