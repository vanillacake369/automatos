import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    /**
     * 예외의 response인 error를...
     *    1) 우리가 직접 생성한 string인 에러를 받기
     *    2) Nest 자체 에러
     *        : string인 error와 number인 statusCode, string혹은string배열인 message 인 에러를 받기
     */
    const error = exception.getResponse() as
      | string
      | { error: string; statusCode: number; message: string | string[] };

    /**
     * 1) 우리가 직접 생성한 string인 에러를 받기
     */
    if (typeof error === 'string') {
      response.status(status).json({
        sucess: false,
        statusCode: status,
        timestamp: new Date().toISOString(),
        error,
        path: request.url,
      });
    } else {
      /**
       * 2) Nest 자체 에러
       */
      response.status(status).json({
        sucess: false,
        timestamp: new Date().toISOString(),
        ...error,
      });
    }
  }
}
