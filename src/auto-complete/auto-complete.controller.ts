import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';

@Controller('auto-complete')
export class AutoCompleteController {
  constructor(private readonly AutoCompleteService: AutoCompleteService) {}
  @Get()
  setMarkdownText() {
    return 'setMarkdownText has called';
  }
}
