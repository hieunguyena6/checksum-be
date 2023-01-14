import { NextFunction, Response, Request } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import RequestWithUser from '../../../utils/rest/request';
import fmt from '../../../utils/formatter';
import * as service from './service';
import { UserNotAuthorizedException } from '../../../exceptions';
import UserNotFoundException from '../../../exceptions/UserNotFoundException';

const login = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const user = await service.getUserByUsername(request.body.userName);
  if (!user) {
    throw new UserNotFoundException();
  }
  const match = await bcrypt.compare(request.body.password, user.password);
  console.log(match, user.password, request.body.password)
  if (!match) {
    throw new UserNotAuthorizedException();
  }
  const token = await jwt.sign({
    data: {
      userName: user.userName
    }
  }, process.env.JWT_KEY, { expiresIn: 60 * 60 });

  response.status(200);
  response.send(fmt.formatResponse({
    token
  }, Date.now() - request.startTime, 'OK', 1));
};

const registerUser = async (request: RequestWithUser, response: Response, next: NextFunction) => {
  const hash = bcrypt.hashSync(request.body.password, bcrypt.genSaltSync(10));

  const users = await service.createUser({
    userName: request.body.userName,
    password: hash
  });

  response.status(200);
  response.send(fmt.formatResponse('success', Date.now() - request.startTime, 'OK', 1));
};

export { registerUser, login };
