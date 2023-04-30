import { Injectable } from '@nestjs/common';
import * as MarkdownIt from 'markdown-it';

@Injectable()
export class AutoCompleteService {
  setMarkDown(content: string): { content: string } {
    return { content };
  }
  renderInputMarkDown(input: string) {
    /** markdown-it API 사용 */
    var md = new MarkdownIt();
    const renderedInput = md.render(input);
    return { content: '', renderedInput };
  }
}
