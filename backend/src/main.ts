/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'https://church-workflow.vercel.app',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
  });
  await app.listen(2024);
}
bootstrap();
