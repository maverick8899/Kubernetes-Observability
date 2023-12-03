FROM node:21-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

ARG DEFAULT_PORT=8080

ENV PORT ${DEFAULT_PORT}
ENV MONGO_URI 'mongodb+srv://maverick:toisethanhcong2003@cluster0.mfjoicd.mongodb.net/Todo'

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ] 