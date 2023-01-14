import { FileChecksumModel, UserModel } from '../../../models';

const saveFileChecksum = async (fileInfor: any) => {
  const data = await FileChecksumModel.create(fileInfor);
  return data;
};

const getFileByChecksum = async (checksum: string) => {
  const data = await FileChecksumModel.findOne({
    checksum
  }).populate({
    path: 'createBy',
    select: 'userName',
    model: UserModel
  });
  return data;
};

export { saveFileChecksum, getFileByChecksum };
