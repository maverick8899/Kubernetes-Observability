FROM node:21-alpine3.17 as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25

#* copy path từ builder vào image-current
COPY --from=builder /app/build /usr/share/nginx/html 

COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD [ "nginx", "-g", "daemon off;" ] #* cmd run nginx not daemon