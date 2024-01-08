import express, { Router } from 'express';
import transactionController from '../controllers/transactionController';
const router = express.Router();

router.get('/', transactionController.getAllTransactions);
router.get('/:id',transactionController.getTransactionsById);
router.post('/', transactionController.createTransaction);
router.put('/:id', transactionController.updateTransaction);
router.delete('/:id', transactionController.deleteTransaction);

export default Router;