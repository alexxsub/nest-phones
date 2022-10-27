import { ConsoleLogger } from '@nestjs/common';
import { utils } from 'src/utils';

export class LoggerService extends ConsoleLogger {
    error(payload: any, args?: any, context?: any) {
        const isError = payload instanceof Error;

        if (isError || !context) {
            // save to db here
        }

        super.error(
            isError
                ? utils.parseError({
                      error: payload,
                      pretty: true,
                  })
                : payload
        );
    }
}
