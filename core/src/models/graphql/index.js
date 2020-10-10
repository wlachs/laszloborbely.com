import { GraphQLObjectType } from 'graphql';
import { projectMutation, projectQuery } from './project';
import { configMutation } from './config';

export const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query type',
  fields: () => ({
    ...projectQuery,
  }),
});

export const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root mutation type',
  fields: () => ({
    ...configMutation,
    ...projectMutation,
  }),
});
