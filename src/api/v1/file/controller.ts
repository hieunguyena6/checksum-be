import { NextFunction, Response, Request } from 'express';
import RequestWithUser from '../../../utils/rest/request';
import fmt from '../../../utils/formatter';
import * as service from './service';
import { CreateFileChecksumDto } from './dtos';
import { HttpException } from '../../../exceptions';

const createFileChecksum = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const data = request.body as CreateFileChecksumDto;
  const fileExist = await service.getFileByChecksum(data.checksum);
  if (fileExist) {
    throw new HttpException(
      400,      
      `This file's fingerprinted has been uploaded to the server before`,
      'DUPLICATE_CHECKSUM'
    );
  }
  const fileData = {
    ...data,
    createBy: request.userData.id,
  };
  const newFileChecksum = await service.saveFileChecksum(fileData);
  response.status(200);
  response.send(fmt.formatResponse(newFileChecksum, Date.now() - request.startTime, 'OK', 1));
};

const getFileByChecksum = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const { checksum } = request.query;
  const file = await service.getFileByChecksum(checksum as string);
  response.status(200);
  response.send(fmt.formatResponse(file, Date.now() - request.startTime, 'OK', 1));
};
export { createFileChecksum, getFileByChecksum };
