import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
export class ConfigDto {
  @IsBoolean()
  @ApiProperty()
  readonly smsFeature: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly emailFeature: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly calendarFeature: boolean;

  @IsBoolean()
  @ApiProperty()
  readonly voiceCallFeature: boolean;
}
