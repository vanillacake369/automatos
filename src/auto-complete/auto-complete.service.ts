import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoCompleteService {
  setMarkDown(content: string): { content: string } {
    return { content };
  }
  renderInputMarkDown(input: string) {
    console.log(input);
    return { renderedInput: input };
  }
}
