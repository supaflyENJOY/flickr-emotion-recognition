FROM node:current-alpine as frontend

WORKDIR /home/project

COPY frontend/package.json ./
COPY frontend/package-lock.json ./

RUN npm install
COPY frontend/ .
RUN npm run build


FROM node:current-alpine as backend

WORKDIR /home/project

COPY backend/package.json ./

RUN npm install
COPY backend/ .
RUN npx tsc || echo ''

COPY --from=frontend /home/project/build /home/project/dist/public

CMD [ "npm", "start" ]