import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigDto } from '../dto/config.dto';
import { ConfigEntity } from '../entities/config.entity';

@Injectable()
export class AppConfigService {
  constructor(
    @InjectRepository(ConfigEntity)
    private readonly configRepository: Repository<ConfigEntity>
  ) {}

  create(configurationDto: ConfigDto): Promise<ConfigEntity> {
    const config = new ConfigEntity();

    config.emailFeature = configurationDto.emailFeature;
    config.smsFeature = configurationDto.smsFeature;
    config.calendarFeature = configurationDto.calendarFeature;
    config.voiceCallFeature = configurationDto.voiceCallFeature;

    return this.configRepository.save(config);
  }

  async findAll(): Promise<ConfigEntity[]> {
    return this.configRepository.find();
  }

  findOne(id: string): Promise<ConfigEntity> {
    return this.configRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.configRepository.delete(id);
  }
}
