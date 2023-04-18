// import * as marked from 'marked';
import { marked } from 'marked';

export function renderMarkdown(markdown: string): string {
  if (markdown) {
    return marked(markdown);
  }
  return 'cannot convert text to markdown';
}
