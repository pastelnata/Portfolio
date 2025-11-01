import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module.js';
import dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './src/common/filters/http-exception.filter.js';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api');
  const port = Number(process.env.PORT || 3000);
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}/api`);
}

bootstrap().catch((error) => {
  console.error('Error during application bootstrap:', error);
});
