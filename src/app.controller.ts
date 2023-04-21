import {
  Controller,
  Get,
  Request,
  Res,
  Body,
  Render,
  Post,
} from '@nestjs/common';
import * as MarkdownIt from 'markdown-it';
import { AppService } from './app.service';
import { AutoCompleteService } from './auto-complete/auto-complete.service';

@Controller()
export class AppController {
  // singleton of injected services
  private readonly md;

  constructor(
    private readonly appService: AppService,
    private readonly autoCompleteService: AutoCompleteService,
  ) {
    this.md = new MarkdownIt();
  }

  // root
  @Get()
  @Render('index')
  root() {
    const content = '- [ ] This is some **Markdown** text.';
    return this.autoCompleteService.setMarkDown(content);
  }

  // AJAX POST Request :: when markdown text input
  @Post('/')
  @Render('index')
  renderInputMarkDown(@Body() body: { text: string }) {
    /** markdown-it API 사용 */
    const renderedInput = this.md.render(body?.text);
    return { content: '', renderedInput };
    /** autoCompleteService 사용 */
    // return this.autoCompleteService.renderInputMarkDown(body?.text);
  }
}
