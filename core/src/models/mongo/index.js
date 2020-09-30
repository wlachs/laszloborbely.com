import mongoose from 'mongoose';
import ConfigModel from './config';

export async function connect() {
  const connectionString = process.env.NODE_ENV === 'production'
    ? 'mongodb://db.laszloborbely.com:27017/laszloborbely_com'
    : 'mongodb://laszlo:123@localhost:27017/laszloborbely_com';
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
