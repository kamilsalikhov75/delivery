import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model('User', UserSchema);
