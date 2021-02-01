import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import {ENTIDADES_ACERO} from './constantes/entidades';
import {MODULOS_ACERO} from "./constantes/modulos";

@Module({
  imports: [
      ...MODULOS_ACERO,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: 'ec2-52-4-177-4.compute-1.amazonaws.com',
      port: 5432,
      username: 'gfjfdkntzvtyrj',
      password: '8c8842ede3b7db8bb0ddebdf6fd24c5d6d4d2ece892946065b71033a087bbda0',
      schema: 'aceros',
      database: 'dchkqrgc6k6ok8',
      entities: [...ENTIDADES_ACERO],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
