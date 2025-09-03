import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.use(express.static("."))


  const config = new DocumentBuilder().setTitle('Handle on NestJS').addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();

// nest new handle-on-nestjs

// yarn add prisma @prisma/client
// yarn prisma init
// yarn prisma db pull
// yarn prisma generate

// yarn add -D @types/multer

// yarn add nestjs/config to manage env variables

// yarn add @nestjs/config @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt

// yarn add @nestjs/swagger swagger-ui-express

// yarn add bcrypt

// nest g module food to generate module
// nest g controller food --no-spec to generate controller
// nest g service food --no-spec to generate service


// nest g resource food --no-spec to generate all at once


