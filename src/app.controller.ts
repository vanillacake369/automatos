import {
  Controller,
  Get,
  Request,
  Res,
  Body,
  Render,
  Post,
} from '@nestjs/common';
import { Response } from 'express';

import { AppService } from './app.service';
import { AutoCompleteService } from './auto-complete/auto-complete.service';

@Controller()
export class AppController {
  // singleton of injected services
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
    // return { content, message: 'Hello world!' };
  }

  // AJAX POST Request :: when markdown text input
  @Post('/')
  @Render('index')
  renderInputMarkDown(@Body() body: { text: string }) {
    return this.autoCompleteService.renderInputMarkDown(body?.text);
  }
}
