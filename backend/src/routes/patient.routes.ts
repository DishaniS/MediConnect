import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Patient route working ✅');
});

export default router;
