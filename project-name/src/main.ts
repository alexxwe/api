import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

const port = process.env.PORT || 5000
const logger = new Logger('Init')

async function bootstrap() {
    // Create the Nest application
    const app = await NestFactory.create(AppModule)

    app.enableCors({})

    // Create the swagger documentation
    const swaggerConfig = new DocumentBuilder()
        .setTitle('Hexastats Swagger API')
        .setDescription('Test the hexastats endpoints.')
        .setVersion('1.0')
        .build()
    const document = SwaggerModule.createDocument(app, swaggerConfig)

    SwaggerModule.setup('swagger', app, document)
    logger.verbose(`NestJS is running on http://localhost:${port}`)
    logger.verbose(`Swagger running http://localhost:${port}/swagger`)

    // Start the application
    await app.listen(port)
}
bootstrap()
