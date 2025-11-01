import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

interface ValidationError {
  constraints?: Record<string, string>;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception.getResponse();
    let message: string | string[] =
      exception.message || 'Internal server error';

    if (Array.isArray(exceptionResponse)) {
      message = exceptionResponse
        .map((err) => (err as ValidationError).constraints)
        .filter(Boolean)
        .map((c) => Object.values(c!))
        .flat();
    }

    const errorResponse = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
    };

    console.error(`[${request.method}] ${request.url}`, errorResponse);

    response.status(status).json(errorResponse);
  }
}
