import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { swaggerInit } from './app.swagger';
import * as auth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new ConfigService();

  app.enableCors({ origin: '*' });

  app.useGlobalPipes(new ValidationPipe());

  app.use(
    '/api/docs',
    auth({
      challenge: true,
      users: { imaginamos: config.get('PASS_SWAGGER') },
    }),
  );

  swaggerInit(app);

  await app.listen(3000);
}
bootstrap();
