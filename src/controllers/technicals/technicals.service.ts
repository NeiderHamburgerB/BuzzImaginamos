import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Requests } from '../requests/entities/request.entity';
import { CreateTechnicalDto } from './dto/create-technical.dto';
import { UpdateTechnicalDto } from './dto/update-technical.dto';
import { Technicals } from './entities/technical.entity';

@Injectable()
export class TechnicalsService {
  constructor(
    @InjectRepository(Technicals)
    private technicalRepository: Repository<Technicals>,
    @InjectRepository(Requests)
    private requestRepository: Repository<Requests>,
  ) {}

  async create(createTechnicalDto: CreateTechnicalDto): Promise<Technicals> {
    try {
      const newTechnical = this.technicalRepository.create(createTechnicalDto);
      return await this.technicalRepository.save(newTechnical);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Technicals[]> {
    try {
      return await this.technicalRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Technicals> {
    try {
      return this.technicalRepository.findOne({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateTechnicalDto: UpdateTechnicalDto) {
    try {
      return this.technicalRepository.update(id, updateTechnicalDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    try {
      return this.technicalRepository.delete(id);
    } catch (error) {
      return error;
    }
  }

  async getRequestByTechnical(technical: number) {
    try {
      return await this.requestRepository
        .createQueryBuilder('requests')
        .where('requests.technical = :id', { id: technical })
        .getMany();
    } catch (error) {
      return error;
    }
  }
}
