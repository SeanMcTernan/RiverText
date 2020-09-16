//Routes for the Express Server
import { Router } from 'express';

import { getRiverData } from '../controllers/riverDataController';

const router = Router();

router.get('/webhooks', getRiverData);

export default router;  