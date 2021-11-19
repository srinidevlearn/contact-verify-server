import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsModule } from './swagger_example/cats.module';
import { UsersModule } from './users_typeorm_example/users.module';


const MODULES = [UsersModule];
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'contact_verification',
      password: 'contact_verification123,',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ...MODULES,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
