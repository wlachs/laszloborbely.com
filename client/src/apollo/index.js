import { ApolloClient, InMemoryCache } from '@apollo/client';
import getCurrentConfiguration, { adminEndpoint, guestEndpoint } from '../config';

export const guestClient = new ApolloClient({
  uri: getCurrentConfiguration().serverUri + guestEndpoint,
  cache: new InMemoryCache(),
});

export const adminClient = new ApolloClient({
  uri: getCurrentConfiguration().serverUri + adminEndpoint,
  cache: new InMemoryCache(),
});
