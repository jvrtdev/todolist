import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Todo List - João Vitor Romano')
    .setDescription('API feita para um desafio técnico realizado pela petronet. O desafio consiste em desenvolver uma lista de tarefas em um sistema web.')
    .setVersion('1.0')
    .addTag('todo list')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
