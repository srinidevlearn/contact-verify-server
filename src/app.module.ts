import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { CoreModule } from './core/core.module';
// import { CatsModule } from './swagger_example/cats.module';
import { UsersModule } from './users_typeorm_example/users.module';

const MODULES = [CoreModule, UsersModule, ConfigModule];
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DATABASE_HOST'),
          port: configService.get('DATABASE_PORT'),
          username: configService.get('DB_USER_NAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DATABASE_NAME'),
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    ...MODULES,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private envConfigService: ConfigService) {}
}
