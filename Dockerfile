FROM node:14-alpine

WORKDIR /var/www/html

COPY . .

EXPOSE 3006