import { Router } from 'express';
import { verifyToken, authorizeRoles } from '../middleware/auth.middleware';

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

export default router;
