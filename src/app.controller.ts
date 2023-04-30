import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AutoCompleteService } from './auto-complete/auto-complete.service';

@Controller()
export class AppController {
  // singleton of injected services
  private readonly md;

  constructor(
    private readonly appService: AppService,
    private readonly autoCompleteService: AutoCompleteService,
  ) {}

  // root
  @Get()
  @Render('index')
  root() {
    const content = '- [ ] This is some **Markdown** text.';
    return this.autoCompleteService.setMarkDown(content);
  }
}
