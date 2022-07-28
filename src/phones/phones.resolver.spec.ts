import { Test, TestingModule } from '@nestjs/testing';
import { PhonesResolver } from './phones.resolver';
import { PhonesService } from './phones.service';

describe('PhonesResolver', () => {
  let resolver: PhonesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonesResolver, PhonesService],
    }).compile();

    resolver = module.get<PhonesResolver>(PhonesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
