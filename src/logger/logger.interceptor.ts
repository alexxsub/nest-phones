import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { utils } from 'src/utils';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            catchError((err) => {
                const error = Array.isArray(err.response?.message)
                    ? Error(`Validation error: ${err.response.message.join(', ')}`)
                    : err;

                Logger.error(error);

                // this error will be sent to the UI

                const response = utils.parseError({ error }).message;

                throw Error(response);
            })
        );
    }
}
