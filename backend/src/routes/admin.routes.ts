import { Router } from 'express';
import { verifyToken, authorizeRoles } from '../middleware/auth.middleware';
import { getAllUsers } from '../controllers/admin.controller';

const router = Router();

router.get('/users', verifyToken, authorizeRoles('admin'), getAllUsers);

export default router;
