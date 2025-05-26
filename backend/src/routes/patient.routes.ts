import { Router } from 'express';
import { verifyToken, authorizeRoles } from '../middleware/auth.middleware';
import {
  getAllPatients,
  getPatientById,
  createPatient,
  updatePatient,
  deletePatient,
} from '../controllers/patient.controller';

const router = Router();

// Protected route - only accessible to users with role 'patient'
router.get(
  '/',
  verifyToken,
  authorizeRoles('patient'),
  (req, res) => {
    const user = (req as any).user; // access user info from decoded token
    res.status(200).json({
      message: 'Patient route working ✅',
      user: user
    });
  }
);

// Access control: customize as needed
router.get('/', verifyToken, authorizeRoles('admin', 'doctor'), getAllPatients);
router.get('/:id', verifyToken, authorizeRoles('admin', 'doctor', 'patient'), getPatientById);
router.post('/', verifyToken, authorizeRoles('admin'), createPatient);
router.put('/:id', verifyToken, authorizeRoles('admin', 'doctor'), updatePatient);
router.delete('/:id', verifyToken, authorizeRoles('admin'), deletePatient);

export default router;
