import express from 'express';
import cors from 'cors';
import { connect, initDB } from './models/mongo';
import initGraphQL from './models/graphql';

async function init() {
  const app = express();
  if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
  }
  await initDB();
  await initGraphQL(app);
  app.listen(4000);
}

connect()
  .then(init)
  .catch();
