import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  primaryMobileNumber: string;

  @ApiProperty()
  primaryEmailId: string;

  @ApiProperty()
  secondaryMobileNumber: string;

  @ApiProperty()
  secondaryEmailId: string;

  @ApiProperty()
  isActive: boolean;

  @ApiProperty({ enum: ['Male', 'Female', 'Others'] })
  gender: string;
}
export enum UserRole {
  Male = 'Male',
  Female = 'Female',
  Others = 'Others',
}
