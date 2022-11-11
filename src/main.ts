import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //solo deja la data definida en el dto, remueve la data extra enviada
      forbidNonWhitelisted: true, //agrega validacion para campos que no estan definidos en el dto
    }),
  );
  await app.listen(3000);
}
bootstrap();
