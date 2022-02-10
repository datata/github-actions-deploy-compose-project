FROM node:10-alpine

WORKDIR /var/www/html

COPY . .

RUN npm install

EXPOSE 3006