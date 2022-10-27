import { Module,Logger } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
      plugins: [
        {
          async serverWillStart() {
            Logger.debug(`🚀 Started Apollo!`,'ApolloPlugin');
          },
        },
      ],
    }),
  ],
})
export class ApolloModule {}
