import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Requests } from 'src/controllers/requests/entities/request.entity';
import { Technicals } from 'src/controllers/technicals/entities/technical.entity';

@Entity()
export class ServicesLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Requests, (request) => request.id)
  request : number;

  @ManyToOne(() => Technicals, (technical) => technical.id)
  technical: number;

  @Column()
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}