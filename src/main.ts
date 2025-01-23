import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { MainModule } from './main.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    origin: 'http://localhost:3000',
    credentials: true,
  });
  await app.listen(8888);
  const serverUrl = await app.getUrl(); // Lấy URL đầy đủ của server
  Logger.log(`Server is running at: ${serverUrl}`);
  Logger.log(`API documentation has been generated, please visit: ${serverUrl}/swagger-api/`);
}
bootstrap();
