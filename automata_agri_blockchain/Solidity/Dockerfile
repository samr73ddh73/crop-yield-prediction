#Address deployed to - 0xee6eC0977CB295De8347Fb3b0bBB69705cC1B09e
#Address - 0x27AdF62B8f417fca9933b2673b02f5786A2EC07C

FROM ubuntu:16.04

MAINTAINER Prateek

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y git-core

COPY . dev:/devsocsecond
WORKDIR dev:/devsocsecond

VOLUME ["dev"]


RUN npm install

CMD node deploy
