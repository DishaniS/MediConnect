import { Router } from 'express';
import * as authController from '../controllers/auth.controller';

const router = Router();

router.get('/', (req, res) => {
  res.send('Auth route working ✅');
});

// Use as RequestHandler
router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;
