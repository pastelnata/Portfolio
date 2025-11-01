FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . /usr/src/app

CMD ["npm", "run", "start"]
