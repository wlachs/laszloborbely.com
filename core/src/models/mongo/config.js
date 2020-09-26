import mongoose from 'mongoose';

const { Schema } = mongoose;

const configSchema = new Schema({
    pageTitle: { type: String, required: true, default: 'Default Page Title' },
    adminUserName: { type: String, required: true, default: 'admin' },
    adminPassword: { type: String, required: true, default: 'admin' },
});

export default mongoose.model('Config', configSchema);
