import { Document } from 'mongoose';

export default interface User extends Document {
  userName: string;
  password: string;
}
