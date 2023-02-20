import { Module } from '@nestjs/common';
import { ServicesLogService } from './services_log.service';
import { ServicesLogController } from './services_log.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesLog } from './entities/services_log.entity';
import { Requests } from '../requests/entities/request.entity';
import { RequestsModule } from '../requests/requests.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([ServicesLog, Requests]),
    RequestsModule
  ],
  controllers: [ServicesLogController],
  providers: [ServicesLogService]
})
export class ServicesLogModule {}
