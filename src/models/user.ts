import { model, Model, Schema } from 'mongoose';
import { User } from './types';

export const userSchema = new Schema(
  {
    userName: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel: Model<User> = model<User>('users', userSchema);

export default UserModel;
