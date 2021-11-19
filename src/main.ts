import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// add swagger ui
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Contact Verfication System')
    .setDescription('Contact Verification System using email and sms')
    .setVersion('1.0')
    .addTag('e-verify contact details')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
