import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Courses API")
    .setVersion("1.0.0")
    .setDescription("API related to courses")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document)     // "api" é a porta que o document Swagger estara disponivel



  await app.listen(3000);


}
bootstrap();
