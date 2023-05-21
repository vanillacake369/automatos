import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { renderMarkdown } from '../helpers/hbs.helpers';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  /* App 인스턴스 세팅 */
  // create Express App Instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 전역 파이프라인
  app.useGlobalPipes(new ValidationPipe());
  // 전역 필터
  app.useGlobalFilters(new HttpExceptionFilter());

  /* View 세팅 */
  /* // set view engine to hbs
  app.setViewEngine('hbs');
  // use static assets & set view
  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  // register partials and helper to "handlebars instance"
  hbs.registerHelper('renderMarkdown', renderMarkdown); */

  await app.listen(process.env.PORT);
}
bootstrap();
