import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter.js';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api');
  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api`);
}

bootstrap().catch((error) => {
  console.error('Error during application bootstrap:', error);
});
