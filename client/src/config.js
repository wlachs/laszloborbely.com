const liveConfiguration = {
  serverUri: '',
};

const devConfiguration = {
  serverUri: 'http://localhost:4000',
};

function getCurrentConfiguration() {
  switch (process.env.NODE_ENV) {
    case 'production':
      return liveConfiguration;
    case 'stage':
      return liveConfiguration;
    case 'development':
      return devConfiguration;
    default:
      return devConfiguration;
  }
}

export const guestEndpoint = '/graphql/guest';
export const adminEndpoint = '/graphql/admin';
export const authEndpoint = '/auth';

export default getCurrentConfiguration;
