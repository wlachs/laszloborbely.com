const liveConfiguration = {
  port: 4000,
  graphiql: false,
  cors: false,
};

const devConfiguration = {
  port: 4000,
  graphiql: true,
  cors: true,
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
