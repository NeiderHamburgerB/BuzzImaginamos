import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TechnicalsService } from './technicals.service';
import { CreateTechnicalDto } from './dto/create-technical.dto';
import { UpdateTechnicalDto } from './dto/update-technical.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Technicals')
@Controller('technicals')
export class TechnicalsController {
  constructor(private readonly technicalsService: TechnicalsService) {}

  @ApiOperation({
    summary: 'EP to create',
  })
  @Post('/create')
  create(@Body() createTechnicalDto: CreateTechnicalDto) {
    return this.technicalsService.create(createTechnicalDto);
  }

  @ApiOperation({
    summary: 'EP to find all',
  })
  @Get()
  findAll() {
    return this.technicalsService.findAll();
  }

  @ApiOperation({
    summary: 'EP to find one',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technicalsService.findOne(+id);
  }

  @ApiOperation({
    summary: 'EP to update one',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTechnicalDto: UpdateTechnicalDto,
  ) {
    return this.technicalsService.update(+id, updateTechnicalDto);
  }

  @ApiOperation({
    summary: 'EP to delete one',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technicalsService.remove(+id);
  }

  @ApiOperation({
    summary: 'EP to get request by technical',
  })
  @Get('requests/by/:technicalid')
  getRequestByTechnical(@Param('technicalid') technicalid: string) {
    return this.technicalsService.getRequestByTechnical(+technicalid);
  }

}
