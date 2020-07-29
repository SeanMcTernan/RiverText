import express, { Request, Response } from 'express';
import { json } from 'body-parser';

import riverTextRoutes from './routes/riverData';

const app = express();

app.use(json());

app.use('/riverdata', riverTextRoutes);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
