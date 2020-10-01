import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? '/graphql' : 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

export default client;
