"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
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
//# sourceMappingURL=main%20copy.js.map