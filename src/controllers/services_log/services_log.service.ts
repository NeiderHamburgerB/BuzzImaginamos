import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServicesLogDto } from './dto/create-services_log.dto';
import { UpdateServicesLogDto } from './dto/update-services_log.dto';
import { ServicesLog } from './entities/services_log.entity';

@Injectable()
export class ServicesLogService {
  constructor(
    @InjectRepository(ServicesLog)
    private serviceLogRepository: Repository<ServicesLog>,
  ) {}

  async create(
    createServicesLogDto: CreateServicesLogDto,
  ): Promise<ServicesLog> {
    try {
      const newServiceLog =
        this.serviceLogRepository.create(createServicesLogDto);
      return await this.serviceLogRepository.save(newServiceLog);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<ServicesLog[]> {
    try {
      return await this.serviceLogRepository
        .createQueryBuilder('servicesLog')
        .leftJoinAndSelect('servicesLog.technical', 'technical')
        .leftJoinAndSelect('servicesLog.request', 'request')
        .select([
          'servicesLog.id',
          'technical.name',
          'request.token',
          'servicesLog.description',
          'servicesLog.created_at',
        ])
        .getMany();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<any> {
    try {
      return await this.serviceLogRepository
        .createQueryBuilder('servicesLog')
        .leftJoinAndSelect('servicesLog.technical', 'technical')
        .leftJoinAndSelect('servicesLog.request', 'request')
        .select([
          'servicesLog.id',
          'technical.name',
          'request.token',
          'servicesLog.description',
          'servicesLog.created_at',
        ])
        .where('servicesLog.id = :id', { id })
        .getMany();
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateServicesLogDto: UpdateServicesLogDto) {
    try {
      return this.serviceLogRepository.update(id, updateServicesLogDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    try {
      return this.serviceLogRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
