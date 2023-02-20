import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicesLogService } from './services_log.service';
import { CreateServicesLogDto } from './dto/create-services_log.dto';
import { UpdateServicesLogDto } from './dto/update-services_log.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RequestsService } from '../requests/requests.service';

@ApiTags('ServicesLog')
@Controller('services-log')
export class ServicesLogController {
  constructor(
    private readonly servicesLogService: ServicesLogService,
    private readonly requestService: RequestsService,
  ) {}

  @ApiOperation({
    summary: 'EP to create',
  })
  @Post('/create')
  create(@Body() createServicesLogDto: CreateServicesLogDto) {
    this.requestService.update(createServicesLogDto.request, {
      status: createServicesLogDto.status,
    });
    delete createServicesLogDto.status;

    return this.servicesLogService.create(createServicesLogDto);
  }

  @ApiOperation({
    summary: 'EP to find all',
  })
  @Get()
  findAll() {
    return this.servicesLogService.findAll();
  }

  @ApiOperation({
    summary: 'EP to find one',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesLogService.findOne(+id);
  }

  @ApiOperation({
    summary: 'EP to update one',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServicesLogDto: UpdateServicesLogDto,
  ) {
    this.requestService.update(updateServicesLogDto.request, {
      status: updateServicesLogDto.status,
    });
    delete updateServicesLogDto.status;

    return this.servicesLogService.update(+id, updateServicesLogDto);
  }

  @ApiOperation({
    summary: 'EP to delete one',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesLogService.remove(+id);
  }
}
