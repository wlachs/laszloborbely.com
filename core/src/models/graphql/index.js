import { GraphQLObjectType } from 'graphql';
import { projectMutation, projectQuery } from './project';
import { configMutation, configQuery } from './config';

export const GuestQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Guest query type',
  fields: () => ({
    ...projectQuery,
  }),
});

export const AdminQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Admin query type',
  fields: () => ({
    ...projectQuery,
    ...configQuery,
  }),
});

export const AdminMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Admin mutation type',
  fields: () => ({
    ...configMutation,
    ...projectMutation,
  }),
});
