import express from 'express';
import cors from 'cors';
import { connect, initDB } from './models/mongo';
import getCurrentConfiguration from './config';
import initRoutes from './routes';

async function run() {
  /* Get current environment */
  const configuration = getCurrentConfiguration();

  /* Connect to DB */
  await connect();

  /* Initialize DB */
  await initDB();

  /* Initialize express */
  const app = express();

  /* Enable CORS if set */
  if (configuration.cors) {
    app.use(cors());
  }

  /* Initialize routes */
  initRoutes(app);

  /* Start listening on predefined port */
  app.listen(configuration.port);
}

run()
  .then()
  .catch();
