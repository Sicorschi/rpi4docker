# Estructura

- backend
- frontend
- .gitignore
- docker-compose.yaml

## backend

Folder to hold the API and the Dockerfile to dockerize the backend part.

### API

Nodejs API running with Express Framework. Connects with MySQL DB.

### Dockerfile

File to dockerize the backend part:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "node", "src/index.js" ]
```

## frontend

Folder that holds the React front app to display the web components and fetch the API to interact with the DB.
Vite Framework running with Typescript.

### Dockerfile

File to dockerize the front part. Steps to deploy the container.

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5173
CMD [ "npm", "start" ]
```

## docker-compose.yaml

File to orchestrate the docker containers and run the docker compose structure.

```yaml
version: "3.8"
services:
  frontend:
    build: ./frontend
    depends_on:
      - backend
    container_name: frontend_c
    restart: always
    ports:
      - "5173:5173"
  backend:
    build: ./backend
    restart: always
    depends_on:
      - mysqldb
    container_name: backend_c
    links:
      - mysqldb
    ports:
      - "4000:4000"
    stdin_open: true
    tty: true
  mysqldb:
    image: mysql
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=
      - MYSQL_DATABASE=origin_db
    ports:
      - "3307:3306"
```

# Start

To start the docker compose architecture you need to have installed:

- Docker
- NodeJS

```
docker-compose up
```
