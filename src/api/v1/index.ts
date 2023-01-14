import { Router } from 'express';
import authMiddleware from '../../middlewares/authMiddleware';
import authRouter from './auth';
import fileRouter from './file';

const router = Router();

router.use('/auth', authRouter);
router.use('/file', authMiddleware, fileRouter);

export default router;
