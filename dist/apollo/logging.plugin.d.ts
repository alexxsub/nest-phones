import { ApolloServerPlugin, GraphQLRequestListener } from 'apollo-server-plugin-base';
export declare class LoggingPlugin implements ApolloServerPlugin {
    serverWillStart(): Promise<void>;
    requestDidStart(): Promise<GraphQLRequestListener>;
}
