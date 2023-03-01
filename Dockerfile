FROM node:lts
EXPOSE 3000

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "run", "deploy"]