import { Plugin } from '@nestjs/apollo';
import { Module,Logger } from '@nestjs/common';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
  GraphQLRequestContextWillSendResponse,
  BaseContext,
} from 'apollo-server-plugin-base';

@Plugin()
export class LoggingPlugin implements ApolloServerPlugin {
  async serverWillStart() {
    Logger.debug(`🚀 Started Apollo!`,'ApolloClass');
  }

  async requestDidStart(): Promise<GraphQLRequestListener> {
    return {
      async willSendResponse(
        ctx: GraphQLRequestContextWillSendResponse<BaseContext>,
      ) {
        if (ctx.operationName != 'IntrospectionQuery')
          Logger.debug(ctx.request.query,'Context');
      },
    };
  }
}
