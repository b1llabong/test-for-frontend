FROM node:lts-alpine
WORKDIR /app
COPY ./front/package.json ./
COPY ./front ./app
RUN  npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
