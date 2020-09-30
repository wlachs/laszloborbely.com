import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { configMutation } from './config';
import { projectMutation, projectQuery } from './project';

async function initGraphQL(app) {
  const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query type',
    fields: () => ({
      ...projectQuery,
    }),
  });

  const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root mutation type',
    fields: () => ({
      ...configMutation,
      ...projectMutation,
    }),
  });

  const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
  });

  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
  }));
}

export default initGraphQL;
