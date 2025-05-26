import { Router } from 'express';
import { verifyToken, authorizeRoles } from '../middleware/auth.middleware';
import { getAllDoctors, createDoctor } from '../controllers/doctor.controller';

const router = Router();

router.get('/', verifyToken, authorizeRoles('admin', 'patient'), getAllDoctors);
router.post('/', verifyToken, authorizeRoles('admin'), createDoctor);

export default router;
