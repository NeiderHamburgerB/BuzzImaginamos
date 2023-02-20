import { Module } from '@nestjs/common';
import { TechnicalsService } from './technicals.service';
import { TechnicalsController } from './technicals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technicals } from './entities/technical.entity';
import { Requests } from '../requests/entities/request.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Technicals, Requests])
  ],
  controllers: [TechnicalsController],
  providers: [TechnicalsService]
})
export class TechnicalsModule {}
