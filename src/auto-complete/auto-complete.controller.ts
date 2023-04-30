import { Body, Get, Post, Render } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AutoCompleteService } from './auto-complete.service';

@Controller('newnote')
export class AutoCompleteController {
  constructor(private readonly autoCompleteService: AutoCompleteService) {}
  // root
  @Get()
  @Render('newnote')
  root() {
    const content = '- [ ] This is some **Markdown** text.';
    return this.autoCompleteService.setMarkDown(content);
  }

  // AJAX POST Request :: when markdown text input
  @Post('/')
  @Render('newnote')
  renderInputMarkDown(@Body() body: { text: string }) {
    /** autoCompleteService 사용 */
    return this.autoCompleteService.renderInputMarkDown(body?.text);
  }
}
