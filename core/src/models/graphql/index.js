import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { configMutation, configQuery } from './config';

export async function initGraphQL(app) {
    const RootQueryType = new GraphQLObjectType({
        name: 'Query',
        description: 'Root query type',
        fields: () => ({
            ...configQuery,
        }),
    });

    const RootMutationType = new GraphQLObjectType({
        name: 'Mutation',
        description: 'Root mutation type',
        fields: () => ({
            ...configMutation,
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
