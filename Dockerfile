FROM node:8-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json ./package.json
COPY ./webpack.config.js ./webpack.config.js
COPY ./yarn.lock ./yarn.lock

RUN yarn install

# Copy app
COPY ./src ./src
COPY ./public/index.html ./public/index.html

# Build source
RUN yarn build

EXPOSE 8172
CMD ["yarn", "run:prod"]

