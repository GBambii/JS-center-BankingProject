import express, { Router } from 'express';
import clientBaseController from '../controllers/clientBaseController';
const router = express.Router();

router.get('/', clientBaseController.getAllClientBase);
router.get('/:id',clientBaseController.getClientBaseById);

export default Router;