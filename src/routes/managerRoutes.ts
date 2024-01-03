import express, { Router } from 'express';
import managerController from '../controllers/managerController';
const router = express.Router();

router.get('/', managerController.getAllManagers);
router.get('/:id',managerController.getManagersById);
router.post('/', managerController.createManager);
router.put('/:id', managerController.updateManager);
router.delete('/:id', managerController.deleteManager);

export default Router;