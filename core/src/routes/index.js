import express from 'express';
import path from 'path';
import graphqlRouter from './graphql';
import authRouter from './auth';

function initRoutes(app) {
  /* GraphQL */
  app.use('/graphql', graphqlRouter);

  /* Auth */
  app.use('/auth', authRouter);

  /* Client */
  app.use(express.static(path.join(process.cwd(), 'client')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${process.cwd()}/client/index.html`));
  });
}

export default initRoutes;
