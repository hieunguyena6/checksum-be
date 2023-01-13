import { Router } from 'express';
import { asyncRouteHandler, validationMiddleware } from '../../../middlewares';
import * as controller from './controller';
import { RegisterUserDto, LoginUserDto } from './dtos';

const router = Router();

router.post('/signup', validationMiddleware(RegisterUserDto, 'body'), asyncRouteHandler(controller.registerUser));
router.post('/login', validationMiddleware(LoginUserDto, 'body'), asyncRouteHandler(controller.login));

export default router;
