import { ConfigModule } from '@nestjs/config';
import development from './stage/development';
export const EnvProvider = ConfigModule.forRoot({
  isGlobal: true,
  load: [development],
});
