FROM node:20-alpine

WORKDIR /app

ENV PORT=3000

COPY package*.json .npmrc ./
RUN npm install --legacy-peer-deps --include=dev

COPY . .
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist-server/index.js"]

