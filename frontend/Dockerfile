FROM node:14.15.4-alpine3.12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src/ ./src/

COPY public/ ./public/

EXPOSE 3000

CMD ["npm", "start"]
