import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigEntity } from './entities/config.entity';
import { ConfigController } from './config.controller';
import { AppConfigService } from './services/config.service';
@Module({
  imports: [TypeOrmModule.forFeature([ConfigEntity])],
  providers: [AppConfigService],
  controllers: [ConfigController],
})
export class ConfigModule {}
