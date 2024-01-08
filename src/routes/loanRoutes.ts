import express, { Router } from 'express';
import loanController from '../controllers/loanController';
const router = express.Router();

router.get('/', loanController.getAllLoans);
router.get('/:id',loanController.getLoansById);
router.post('/', loanController.createLoan);
router.put('/:id', loanController.updateLoan);
router.delete('/:id', loanController.deleteLoan);

export default Router;