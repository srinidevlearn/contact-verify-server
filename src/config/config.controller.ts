import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigEntity } from './entities/config.entity';
import { AppConfigService } from './services/config.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ConfigDto } from './dto/config.dto';

@ApiBearerAuth()
@ApiTags('configs')
@Controller('config')
export class ConfigController {
  constructor(private readonly configService: AppConfigService) {}

  @Post()
  @ApiOperation({ summary: 'Create new configuration' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() configDto: ConfigDto): Promise<ConfigEntity> {
    return this.configService.create(configDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ConfigEntity,
  })
  findAll(): Promise<ConfigEntity[]> {
    return this.configService.findAll();
  }
}
