// import * as marked from 'marked';
import { marked } from 'marked';

export function renderMarkdown(markdown: string): string {
  return marked(markdown);
}
