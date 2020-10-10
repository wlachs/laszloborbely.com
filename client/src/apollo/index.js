import { ApolloClient, InMemoryCache } from '@apollo/client';
import getCurrentConfiguration from '../config';

const client = new ApolloClient({
  uri: getCurrentConfiguration().serverUri,
  cache: new InMemoryCache(),
});

export default client;
