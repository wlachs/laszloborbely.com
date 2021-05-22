import mongoose from 'mongoose';
import { defaultAdminEmail, defaultAdminPassword } from '../../secrets';

const { Schema } = mongoose;

const configSchema = new Schema({
  adminUserName: { type: String, required: true, default: defaultAdminEmail },
  adminPassword: { type: String, required: true, default: defaultAdminPassword },
});

export default mongoose.model('Config', configSchema);
