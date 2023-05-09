FROM node:18 as builder
WORKDIR /build
COPY client .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /build/dist/ /usr/share/nginx/html