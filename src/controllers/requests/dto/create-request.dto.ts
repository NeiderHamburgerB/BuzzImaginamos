import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRequestDto {
 
  @IsNumber()
  @ApiProperty({
    type: Number,
  })
  customer: number;

  @IsNumber()
  @IsOptional()
  technical: number;

  @IsString()
  @ApiProperty({
    type: String,
  })
  description: string;

  @IsString()
  @IsOptional()
  token?: string;

  @IsString()
  @IsOptional()
  status?: string;

}
