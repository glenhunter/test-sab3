FROM nginx:1.17

COPY frontend/dist /usr/share/nginx/html
