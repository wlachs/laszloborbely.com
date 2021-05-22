import mongoose from 'mongoose';
import ConfigModel from './config';
import getCurrentConfiguration from '../../config';

export async function connect() {
  const { db } = getCurrentConfiguration();
  const connectionString = `mongodb://${db.host}:${db.port}/${db.dbName}`;
  return mongoose.connect(connectionString,
    {
      autoIndex: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
}

export async function initDB() {
  const config = await ConfigModel.findOne();
  if (config === null) {
    const defaultConfig = new ConfigModel();
    await defaultConfig.save();
  }
}
