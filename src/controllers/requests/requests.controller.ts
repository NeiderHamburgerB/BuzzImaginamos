import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @ApiOperation({
    summary: 'EP to create',
  })
  @Post('/create')
  async create(@Body() createRequestDto: CreateRequestDto) {
    createRequestDto.token = uuidv4();
    createRequestDto.status = 'pendiente';
    const technical = await this.requestsService.getTechnicalWithleastRequest();
    createRequestDto.technical = technical.id;
    return this.requestsService.create(createRequestDto);
  }

  @ApiOperation({
    summary: 'EP to find all',
  })
  @Get()
  findAll() {
    return this.requestsService.findAll();
  }

  @ApiOperation({
    summary: 'EP to find one',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestsService.findOne(+id);
  }

  @ApiOperation({
    summary: 'EP to update one',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDto: UpdateRequestDto) {
    return this.requestsService.update(+id, updateRequestDto);
  }

  @ApiOperation({
    summary: 'EP to delete one',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestsService.remove(+id);
  }
}
