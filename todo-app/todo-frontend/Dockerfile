FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

RUN npm install -g serve

CMD ["serve", "dist"]
