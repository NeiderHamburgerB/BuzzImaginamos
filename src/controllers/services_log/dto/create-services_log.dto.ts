import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateServicesLogDto {

  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  request: number;

  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  technical: number;

  @IsString()
  @ApiProperty({
    type: String,
  })
  description: string;

  @IsString()
  @ApiProperty({
    type: String,
  })
  status: string;

  
}
