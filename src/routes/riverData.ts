import { Router } from 'express';

import { getRiverData } from '../controllers/getRiverData';

const router = Router();

router.get('/', getRiverData);

export default router;  