# set base image
FROM node:10

# create app directory
WORKDIR /usr/linguicator/linguicator-editor

# install dependencies
COPY package*.json ./
RUN npm ci --only=production

# copy app files
COPY . .

# build minified production app
RUN npm run build

# document exposed ports
EXPOSE 9000

# set image entry point
ENTRYPOINT ["node", "server/server.js"]
