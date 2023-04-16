import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { renderMarkdown } from '../helpers/hbs.helpers';

async function bootstrap() {
  // create Express App Instance
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // use static assets & set view
  app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  // set view engine to hbs
  app.setViewEngine('hbs');
  // register partials and helper to "handlebars instance"
  hbs.registerHelper('renderMarkdown', renderMarkdown);
  await app.listen(3000);
}
bootstrap();
