import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  app.enableCors();
  app.use(express.static("."))

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  app.setGlobalPrefix('api/v1', { exclude: [''] });

  await app.listen(port);
}
bootstrap();
