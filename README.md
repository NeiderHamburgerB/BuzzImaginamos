<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Installation

```bash
Coloque el archivo .env en la raiz del proyecto
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Database
La base de datos fue desplegada en aws rds (estara disponible por 7 dias)

## Documentation with swagger

La documentación esta disponible en /api/docs
El usuario y la contraseña para poder verla esta en el archivo .env

## Dockerfile

Para construir la imagen situese en el proyecto y escriba docker build -t buzz-imaginamos .
Luego esto docker run -p 3000:3000 -d buzz-imaginamos para tener el proyecto ejecutandose en el puerto 3000 localmente


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
