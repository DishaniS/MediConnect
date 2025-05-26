import { Router } from 'express';
import { verifyToken, authorizeRoles } from '../middleware/auth.middleware';


const router = Router();

// Test route (accessible by patients only)
router.get(
  '/',
  verifyToken,
  authorizeRoles('patient'),
  (req, res) => {
    res.send('Patient dashboard data ✅');
  }
);


export default router;

