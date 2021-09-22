FROM node:slim as builder

COPY frontend /src
WORKDIR /src

RUN npx yarn install
RUN npm run build

FROM nginx:1.17
COPY --from=builder /src/dist /usr/share/nginx/html
