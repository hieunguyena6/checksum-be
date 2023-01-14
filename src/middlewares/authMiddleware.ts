import { UserNotAuthorizedException } from '../exceptions';
import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = async (request: Request, response: Response, next: NextFunction) => {
  jwt.verify(request.headers.authorization.split(' ')?.[1], process.env.JWT_KEY, function(err, decoded) {
    if (err) {
      throw new UserNotAuthorizedException();
    }
    console.log(decoded);
  });
}

export default authMiddleware;
