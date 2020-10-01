import mongoose from 'mongoose';

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imageLink: { type: String, required: true },
  pageLink: { type: String },
});

export default mongoose.model('Project', projectSchema);
