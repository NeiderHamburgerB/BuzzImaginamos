import { Test, TestingModule } from '@nestjs/testing';
import { ServicesLogService } from './services_log.service';

describe('ServicesLogService', () => {
  let service: ServicesLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesLogService],
    }).compile();

    service = module.get<ServicesLogService>(ServicesLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
