import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://mwvcuhya:P55ZhNCKXOZJPZXfZM_1PxmOcLdtvxi3@rattlesnake.rmq.cloudamqp.com/mwvcuhya'],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
}

bootstrap();
