import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateTechnicalDto {

  @IsString()
  @ApiProperty({
    type: String,
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    type: String,
  })
  email: string;

  @IsString()
  @ApiProperty({
    type: String,
  })
  phone: string;

}
