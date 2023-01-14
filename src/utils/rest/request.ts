import { Request } from 'express';
import { Types } from 'mongoose';
import URLParams from './urlparams';

/**
 * Interface to add extra modifiers to request.
 */

export interface IUserData 
  {
    id: Types.ObjectId,
    userName: string
  }

export default interface RequestWithUser extends Request {
  userData: IUserData;
  startTime?: number;
}
