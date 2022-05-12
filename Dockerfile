FROM ubuntu:20.04

RUN apt-get update && \
  apt-get install -y  curl && \
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \   
  apt-get install -y nodejs

WORKDIR /usr/app
COPY package.json .
RUN npm install && npm install -g expo-cli
COPY . .

CMD ["expo","start"]