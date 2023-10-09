FROM node:18 AS builder
WORKDIR /build
COPY client .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/dist/ /usr/share/nginx/html