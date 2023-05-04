FROM node:18
WORKDIR /usr/src/app
COPY . .
WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build
CMD [ "npm", "run", "production" ]
