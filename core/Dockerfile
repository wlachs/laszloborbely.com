FROM node:latest
WORKDIR /usr/src/app/src/core
COPY . .
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]
