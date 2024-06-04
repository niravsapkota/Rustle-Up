FROM node:16.0.0-alpine3.13

WORKDIR /app

RUN npm install -g npm@8.5.5

COPY package*.json ./

RUN npm install package.json

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]

