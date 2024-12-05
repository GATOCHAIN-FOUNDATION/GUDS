import mongoose, { Schema, model, models } from 'mongoose';
// Define a schema

const activateTokenSchema = new mongoose.Schema(
  {
    // Other fields for the ActivateToken
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    // Other fields...
  },
  { timestamps: true }
);
// Create a model
const ActivateToken =
  models.ActivateToken || mongoose.model('ActivateToken', activateTokenSchema);

export default ActivateToken;
