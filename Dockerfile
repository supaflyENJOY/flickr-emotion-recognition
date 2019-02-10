FROM node:current-alpine

WORKDIR /home/project

COPY backend/package.json ./

RUN npm install
COPY backend/ .
RUN npx tsc

EXPOSE 80
CMD [ "npm", "start" ]