import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import * as hbs from 'hbs';
import { renderMarkdown } from '../handlebars/helpers/hbs.helpers';

async function bootstrap() {
  // create Express App Instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // set view engine to hbs
  app.setViewEngine('hbs');
  // use static assets & set view
  app.useStaticAssets(path.join(__dirname, '../handlebars', 'public'));
  app.setBaseViewsDir(path.join(__dirname, '../handlebars', 'views'));
  // register partials and helper to "handlebars instance"
  hbs.registerHelper('renderMarkdown', renderMarkdown);
  await app.listen(3000);
}
bootstrap();
