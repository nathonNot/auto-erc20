FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "hardhat", "run","scripts/deploy.js","--network", "target"]