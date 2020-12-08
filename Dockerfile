FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

RUN npm install -g serve

COPY . ./

CMD [ "npm", "run", "build" ]

CMD [ "serve", "-s", "build", "-l", "80" ]