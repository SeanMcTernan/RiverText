//Run express server and listen for incoming data. 
import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import riverTextRoutes from './routes/riverData';

const port = process.env.PORT || 3000;

const app = express();

app.use(json());

app.use('/riverdata', riverTextRoutes);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});