import express, { Request, Response } from 'express';
// Import the Item model once it's defined
// import Item from '../models/item';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    // Get all items from the database
    // const items = await Item.findAll();
    // res.json(items);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
