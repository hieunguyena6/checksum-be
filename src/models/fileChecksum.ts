import { model, Model, Schema, Types } from 'mongoose';
import { FileChecksum } from './types';

export const FileChecksumSchema = new Schema(
  {
    checksum: { type: String, required: true, index: { unique: false } },
    fileName: { type: String, required: true },
    createBy: { type: Types.ObjectId, ref: "user"}
  },
  {
    timestamps: true,
  }
);

const FileChecksumModel: Model<FileChecksum> = model<FileChecksum>('file_checksums', FileChecksumSchema);

export default FileChecksumModel;
