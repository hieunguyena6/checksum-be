import { Document, Types  } from 'mongoose';

export default interface FileChecksum extends Document {
  checksum: string;
  fileName: string;
  createBy: Types.ObjectId;
}
