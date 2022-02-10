FROM node

WORKDIR /var/www/html

COPY . .

RUN npm install

EXPOSE 3006