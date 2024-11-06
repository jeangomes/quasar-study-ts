FROM node:16.15.0-alpine

USER root
RUN npm install -g @quasar/cli

RUN mkdir /home/node/quasar-gaia

# VOLUME [ "/home/node/app" ]
WORKDIR /home/node/quasar-gaia

CMD /bin/sh
