import express from 'express';
import cors from 'cors';
import path from 'path';
import { connect, initDB } from './models/mongo';
import initGraphQL from './models/graphql';
import getCurrentConfiguration from './config';

function initStaticRoutes(app) {
  app.use(express.static(path.join(__dirname, 'client')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/index.html`));
  });
}

async function run() {
  /* Get current environment */
  const configuration = getCurrentConfiguration();

  /* Connect to DB */
  await connect();

  /* Initialize DB */
  await initDB();

  /* Initialize express */
  const app = express();
  if (configuration.cors) {
    app.use(cors());
  }

  /* Initialize GraphQL */
  initGraphQL(app, configuration);

  /* Initialize routes */
  initStaticRoutes(app);

  /* Start listening on predefined port */
  app.listen(configuration.port);
}

run()
  .then()
  .catch();
