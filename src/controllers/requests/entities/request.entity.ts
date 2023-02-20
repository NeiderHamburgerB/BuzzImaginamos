import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Customers } from 'src/controllers/customers/entities/customer.entity';
import { Technicals } from 'src/controllers/technicals/entities/technical.entity';

@Entity()
export class Requests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  token: string;

  @ManyToOne(() => Customers, (customer) => customer.id)
  customer: number;

  @ManyToOne(() => Technicals, (technical) => technical.id, { nullable: true })
  technical?: number;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;
}