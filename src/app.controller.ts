// import { Controller, Get } from '@nestjs/common';

import { Controller, Get, Render } from '@nestjs/common';
import * as path from 'path';

// import { Controller, Get, Res, Render } from '@nestjs/common';
// import { Response } from 'express';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // constructor(private appService: AppService) {}

  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Render('index')
  root() {
    const content = '# Hello, World!\n\nThis is some **Markdown** text.';
    console.log(path.join(__dirname, '../handlebars', 'public'));
    return { content, message: 'Hello world!' };
  }

  // @Get()
  // root(@Res() res: Response) {
  //   return res.render(this.appService.getViewName(), {
  //     message: 'Hello world!',
  //   });
  // }
}
