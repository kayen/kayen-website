FROM node:latest

WORKDIR /usr/src/kayen-website

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ['npm', 'run', 'build', '--report']

