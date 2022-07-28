import { Plugin } from '@nestjs/apollo';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
  GraphQLRequestContextWillSendResponse,
  BaseContext,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async serverWillStart() {
    console.log('🚀 Started Apollo!');
  }

  async requestDidStart(): Promise<GraphQLRequestListener> {
    // console.log('Request started');
    return {
      async willSendResponse(
        ctx: GraphQLRequestContextWillSendResponse<BaseContext>,
      ) {
        if (ctx.operationName != 'IntrospectionQuery')
          console.log(ctx.request.query);
      },
    };
  }
}
