const liveConfiguration = {
  serverUri: '/graphql',
};

const devConfiguration = {
  serverUri: 'http://localhost:4000/graphql',
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

export default getCurrentConfiguration;
