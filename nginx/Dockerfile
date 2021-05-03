FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ENTRYPOINT [ "dockerize", "--wait", "tcp://docker-2-node:3000", "-timeout", "50s" ]
CMD ["nginx", "-g", "daemon off;"]