FROM node:latest

LABEL version="1.0"
LABEL maintainer="Malik Adebiyi <malikbiyi@gmail.com>"
LABEL description="NodeJS, Express, ReactJS, MongoDB and Docker containerized backend for the MERN stack application."

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]