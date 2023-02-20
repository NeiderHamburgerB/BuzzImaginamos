import { Test, TestingModule } from '@nestjs/testing';
import { ServicesLogController } from './services_log.controller';
import { ServicesLogService } from './services_log.service';

describe('ServicesLogController', () => {
  let controller: ServicesLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicesLogController],
      providers: [ServicesLogService],
    }).compile();

    controller = module.get<ServicesLogController>(ServicesLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
