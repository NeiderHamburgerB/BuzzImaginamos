import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Technicals } from '../technicals/entities/technical.entity';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Requests } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Requests)
    private requestRepository: Repository<Requests>,
    @InjectRepository(Technicals)
    private technicalRepository: Repository<Technicals>,
  ) {}

  async create(createRequestDto: CreateRequestDto): Promise<Requests> {
    try {
      const newRequest = this.requestRepository.create(createRequestDto);
      return await this.requestRepository.save(newRequest);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Requests[]> {
    try {
      return await this.requestRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<Requests> {
    try {
      return this.requestRepository.findOne({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  async getTechnicalWithleastRequest(): Promise<any> {
    try {
      const technicals = await this.technicalRepository.find();

      const requestsCounts = await this.requestRepository
        .createQueryBuilder('requests')
        .select('COUNT(*)', 'count')
        .addSelect('requests.technical_id', 'id')
        .groupBy('requests.technical_id')
        .getRawMany();

      const technicalWithRequest = technicals
        .map((technical) => {
          const count = requestsCounts.find(
            (item) => item.id === technical.id,
          )?.count;
          return { ...technical, requestsCount: parseInt(count) || 0 };
        })
        .sort((a, b) => a.requestsCount - b.requestsCount);

      return technicalWithRequest[0];
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    try {
      return this.requestRepository.update(id, updateRequestDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    try {
      return this.requestRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
