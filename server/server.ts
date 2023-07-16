import express, { Request, Response } from 'express';
import cors from 'cors';

import itemsRouter from './routes/items';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/items', itemsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
