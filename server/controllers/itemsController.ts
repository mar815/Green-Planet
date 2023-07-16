import { Request, Response } from 'express';
import Item from '../models/item';

export default {
  getAllItems: async (req: Request, res: Response) => {
    try {
      const items = await Item.findAll();
      res.json(items);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  createItem: async (req: Request, res: Response) => {
    try {
      const newItem = await Item.create(req.body);
      res.json(newItem);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  updateItem: async (req: Request, res: Response) => {
    try {
      await Item.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.json({ message: 'Item updated successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteItem: async (req: Request, res: Response) => {
    try {
      await Item.destroy({
        where: {
          id: req.params.id
        }
      });
      res.json({ message: 'Item deleted successfully' });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  },

  getSingleItem: async (req: Request, res: Response) => {
    try {
      const item = await Item.findOne({
        where: {
          id: req.params.id
        }
      });
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ message: 'Item not found!' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
};
