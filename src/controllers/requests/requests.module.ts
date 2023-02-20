import { Module } from '@nestjs/common';
import { RequestsService } from './requests.service';
import { RequestsController } from './requests.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Requests } from './entities/request.entity';
import { Technicals } from '../technicals/entities/technical.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Requests,Technicals])
  ],
  controllers: [RequestsController],
  providers: [RequestsService],
  exports:[RequestsService]
})
export class RequestsModule {}
