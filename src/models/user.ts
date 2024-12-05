import mongoose, { Schema, model, models } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    profilePicture: { type: String },
    birthday: { type: String },
    telegramNick: { type: String },
    linkedinNick: { type: String },
    country: { type: String },
    active: { type: Boolean, default: false },
    passwordToken: { type: String },
    activateTokens: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'ActivateToken' },
    ],
  },
  { timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);

export default User;
