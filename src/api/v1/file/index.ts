import { Router } from 'express';
import { asyncRouteHandler, validationMiddleware } from '../../../middlewares';
import * as controller from './controller';
import { CreateFileChecksumDto, getFileChecksum } from './dtos';

const router = Router();

router.post('/checksum', validationMiddleware(CreateFileChecksumDto, 'body'), asyncRouteHandler(controller.createFileChecksum));
router.get('', validationMiddleware(getFileChecksum, 'query'), asyncRouteHandler(controller.getFileByChecksum));

export default router;
