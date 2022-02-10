FROM node:10-alpine

WORKDIR /var/www/html

COPY . .

EXPOSE 3006