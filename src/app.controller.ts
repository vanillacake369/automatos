import { Controller, Get, Render, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { AutoCompleteService } from './auto-complete/auto-complete.service';
import { response } from 'express';

@Controller()
export class AppController {
  // singleton of injected services
  private readonly md;

  constructor(private readonly appService: AppService) {}

  /* // root
  @Get()
  @Render('index')
  root() {
    const content = '- [ ] This is some **Markdown** text.';
    return this.autoCompleteService.setMarkDown(content);
  } */
}
