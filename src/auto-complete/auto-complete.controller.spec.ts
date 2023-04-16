import { Test, TestingModule } from '@nestjs/testing';
import { AutoCompleteController } from './auto-complete.controller';

describe('AutoCompleteController', () => {
  let controller: AutoCompleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutoCompleteController],
    }).compile();

    controller = module.get<AutoCompleteController>(AutoCompleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
