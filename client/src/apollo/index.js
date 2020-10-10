import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import getCurrentConfiguration, { adminEndpoint, guestEndpoint } from '../config';

export const guestClient = () => new ApolloClient({
  uri: getCurrentConfiguration().serverUri + guestEndpoint,
  cache: new InMemoryCache(),
});

export const adminClient = (token) => {
  const httpLink = createHttpLink({
    uri: getCurrentConfiguration().serverUri + adminEndpoint,
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }));
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
