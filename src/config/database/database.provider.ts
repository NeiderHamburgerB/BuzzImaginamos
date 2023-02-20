import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/controllers/customers/entities/customer.entity';
import { Requests } from 'src/controllers/requests/entities/request.entity';
import { ServicesLog } from 'src/controllers/services_log/entities/services_log.entity';
import { Technicals } from 'src/controllers/technicals/entities/technical.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const DatabaseProvider = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      type: 'postgres',
      host: config.get('DB_HOST_DEV'),
      port: parseInt(config.get('DB_PORT_DEV')),
      username: config.get('DB_USERNAME_DEV'),
      password: config.get('DB_PASSWORD_DEV'),
      database: config.get('DB_DEV'),
      entities: [Customers, Technicals, Requests, ServicesLog],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy()
    }),
  }),
];
