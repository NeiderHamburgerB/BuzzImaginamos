import { Test, TestingModule } from '@nestjs/testing';
import { TechnicalsController } from './technicals.controller';
import { TechnicalsService } from './technicals.service';

describe('TechnicalsController', () => {
  let controller: TechnicalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechnicalsController],
      providers: [TechnicalsService],
    }).compile();

    controller = module.get<TechnicalsController>(TechnicalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
