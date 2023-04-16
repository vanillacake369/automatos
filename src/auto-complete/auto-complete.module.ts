import { Module } from '@nestjs/common';
import { AutoCompleteController } from './auto-complete.controller';
import { AutoCompleteService } from './auto-complete.service';

@Module({
  controllers: [AutoCompleteController],
  providers: [AutoCompleteService]
})
export class AutoCompleteModule {}