import { GraphQLSchema } from 'graphql';
import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import jwt from 'express-jwt';
import { jwtSecret } from '../secrets';
import { conditionalMW } from '../utils/express-utils';
import getCurrentConfiguration from '../config';
import { RootMutationType, RootQueryType } from '../models/graphql';

const router = new Router();
const configuration = getCurrentConfiguration();

const querySchema = new GraphQLSchema({
  query: RootQueryType,
});

const adminSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

router.use('/admin',
  conditionalMW(configuration.auth, jwt({
    secret: jwtSecret,
    algorithms: [configuration.jwtAlgorithm],

  })),
  graphqlHTTP({
    graphiql: configuration.graphiql,
    schema: adminSchema,
  }));

router.use('/guest',
  graphqlHTTP({
    graphiql: configuration.graphiql,
    schema: querySchema,
  }));

export default router;
