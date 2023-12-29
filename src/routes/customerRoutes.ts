
import express, { Router } from 'express';
import customerController from '../controllers/customerController';


const router = express.Router();

// Routes for CRUD operations
router.get('/', customerController.getAllCustomers);
router.get('/:id',customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);


export default Router;

