FROM node:lts
EXPOSE 3000

WORKDIR /app
COPY . .

ARG ENV
ENV build_env=$ENV

RUN npm install

CMD ["sh", "-c", "npm run deploy:$build_env"]
