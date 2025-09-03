import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static("."))
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();

// nest new handle-on-nestjs

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate

// nest g module food to generate module
// nest g controller food --no-spec to generate controller
// nest g service food --no-spec to generate service


// nest g resource food --no-spec to generate all at once

