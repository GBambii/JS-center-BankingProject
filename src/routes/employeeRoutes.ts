import express, { Router } from 'express';
import employeeController from '../controllers/employeeController';
const router = express.Router();

router.get('/', employeeController.getAllEmployees);
router.get('/:id',employeeController.getEmployeeById);
router.post('/', employeeController.createEmployee);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);

export default Router;