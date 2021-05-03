FROM node:alpine

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENV PORT=3000
ENV MYSQL_HOST=docker-2-mysql
ENV MYSQL_DATABASE=docker
ENV MYSQL_ROOT_USER=root
ENV MYSQL_ROOT_PASSWORD=root

RUN npm install -g nodemon

WORKDIR /home/node/app
RUN chown -R node /home/node/app
USER node

COPY package.json yarn.lock ./
RUN yarn

EXPOSE 3000

ENTRYPOINT [ "dockerize", "--wait", "tcp://docker-2-mysql:3306", "-timeout", "50s" ]
CMD [ "yarn", "dev" ]