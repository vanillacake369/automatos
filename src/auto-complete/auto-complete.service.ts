import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoCompleteService {
  setMarkDown(content: string): { content: string } {
    return { content };
  }
  renderInputMarkDown(input: string) {
    // console.log('render input text');
    console.log(input);
    return { renderedInput: input };
  }
  // renderInputMarkDown(body: Request) {
  //   console.log('render input text');
  //   console.log(body);
  //   return { body };
  // }
}
