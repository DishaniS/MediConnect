import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Doctor route working ✅');
});

export default router;
