<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
  <a href='https://www.apollographql.com/'><img src='https://user-images.githubusercontent.com/841294/53402609-b97a2180-39ba-11e9-8100-812bab86357c.png' height='100' alt='Apollo Server'></a>
</p>

  <p align="center">Example of backend on a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework <a href="http://nestjs.org" target="_blank">Nestjs</a> and GraphQL server <a href="https://www.apollographql.com/" target="_blank">Apollo</a>.</p>
    <p align="center">

## Description

Type Script example API backend for CRUD operations for phonebook.

### Stack: typescript,nestjs,graphql,apollo,mongodb

### branch mapped_types has been edited for example of  <https://docs.nestjs.com/graphql/mapped-types#mapped-types>

## Installation

<a href="https://docs.docker.com/engine/install/" target="_blank">To install docker engine</a>

```bash
#clone git repository
https://github.com/alexxsub/nest-phones.git
```

```bash
#install dependencies
npm i
```

```bash
#copy .env from example
cp .env.example .env
```

edit .env for your environment

```bash
NODE_ENV="development" # nodejs environment
ORIGIN="http://localhost" # for CORS
PORT="3000"  # port API
SERVICE="api" # name service in URL, for example <http://localhost/api>
DB_HOST="localhost:27017" # mongodb host and port
DB_USER="admin"  #mongodb user
DB_PASSWORD=""   #mongodb user password
DB_name="nestphones" #DB name

```

## Running the app

```bash
#start mongodb docker server-container
docker-compose up -d

#stop mongo container
docker-compose down

# run app in diferent modes, see more scripts in package.json
# development mode
$ npm run start

# watch evelopment mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

API playground <http://localhost:3000/graphql>

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
