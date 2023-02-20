import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customers } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private customerRepository: Repository<Customers>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customers> {
    try {
      const newCustomer = this.customerRepository.create(createCustomerDto);
      return await this.customerRepository.save(newCustomer);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<Customers[]> {
    try {
      return await this.customerRepository.find();
    } catch (error) {
      return error;
    }
  }

  findOne(id: number): Promise<Customers> {
    try {
      return this.customerRepository.findOne({ where: { id } });
    } catch (error) {
      return error;
    }
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {
      return this.customerRepository.update(id, updateCustomerDto);
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    try {
      return this.customerRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
