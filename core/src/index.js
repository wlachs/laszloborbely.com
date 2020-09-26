import express from 'express';
import { connect, initDB } from './models/mongo';
import { initGraphQL } from './models/graphql';

async function init() {
    const app = express();
    await initDB();
    await initGraphQL(app);
    app.listen(4000);
}

connect()
    .then(init)
    .catch();
