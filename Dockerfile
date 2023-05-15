FROM node:lts
EXPOSE 3000

WORKDIR /app
COPY . .

ARG ENV

RUN npm install

CMD ["sh", "-c", "npm run deploy:$ENV"]
