import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { EnvModule } from './config/env/env.module';
import { CustomersModule } from './controllers/customers/customers.module';
import { TechnicalsModule } from './controllers/technicals/technicals.module';
import { RequestsModule } from './controllers/requests/requests.module';
import { ServicesLogModule } from './controllers/services_log/services_log.module';

@Module({
  imports: [
    EnvModule,
    DatabaseModule,
    CustomersModule,
    TechnicalsModule,
    RequestsModule,
    ServicesLogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
