import { GraphQLSchema } from 'graphql';
import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import jwt from 'express-jwt';
import { jwtSecret } from '../secrets';
import { conditionalMW } from '../utils/express-utils';
import getCurrentConfiguration from '../config';
import { AdminMutationType, AdminQueryType, GuestQueryType } from '../models/graphql';

const router = new Router();
const { auth, graphiql } = getCurrentConfiguration();

const querySchema = new GraphQLSchema({
  query: GuestQueryType,
});

const adminSchema = new GraphQLSchema({
  query: AdminQueryType,
  mutation: AdminMutationType,
});

router.use('/admin',
  conditionalMW(auth.enabled, jwt({
    secret: jwtSecret,
    algorithms: [auth.jwtAlgorithm],

  })),
  graphqlHTTP({
    graphiql,
    schema: adminSchema,
  }));

router.use('/guest',
  graphqlHTTP({
    graphiql,
    schema: querySchema,
  }));

export default router;
