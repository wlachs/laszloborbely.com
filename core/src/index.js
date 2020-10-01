import express from 'express';
import cors from 'cors';
import path from 'path';
import { connect, initDB } from './models/mongo';
import initGraphQL from './models/graphql';

function initRoutes(app) {
  if (process.env.NODE_ENV !== 'production') {
    app.use(cors());
  }
  app.use(express.static(path.join(__dirname, 'client')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/index.html`));
  });
  app.listen(4000);
}

async function init() {
  const app = express();
  await initDB();
  await initGraphQL(app);
  initRoutes(app);
}

connect()
  .then(init)
  .catch();
