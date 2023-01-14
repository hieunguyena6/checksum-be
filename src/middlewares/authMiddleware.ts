import { UserNotAuthorizedException } from '../exceptions';
import { NextFunction, Response, Request } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import RequestWithUser, { IUserData } from '../utils/rest/request';

const authMiddleware = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  if (request.headers.authorization?.split(' ')?.[1]) {
    jwt.verify(request.headers.authorization.split(' ')?.[1], process.env.JWT_KEY, function (err, decoded) {
      if (err) {
        console.log(err)
        return next(new UserNotAuthorizedException());
      }
      request.userData = (decoded as JwtPayload)?.data as IUserData;
      return next();
    });
  } else {
    next(new UserNotAuthorizedException());
  }
};

export default authMiddleware;
