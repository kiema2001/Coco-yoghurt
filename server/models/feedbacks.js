import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Feedback', feedbackSchema);

