import express, { Request, Response } from 'express';
import itemsController from '../controllers/itemsController';

const router = express.Router();

// Routes
router.get('/', itemsController.getAllItems);
router.post('/', itemsController.createItem);
router.put('/:id', itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);
router.get('/:id', itemsController.getSingleItem);

export default router;
