import { writeFileSync } from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestRTK')
    .setDescription('The example Nest RTK project')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  writeFileSync('./swagger-spec.json', JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();
