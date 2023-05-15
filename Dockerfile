FROM node:lts
EXPOSE 3000

WORKDIR /app
COPY . .

ARG ENV

RUN npm install

CMD ["npm", "run", "deploy:$ENV"]
