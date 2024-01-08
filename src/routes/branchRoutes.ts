import express, { Router } from 'express';
import branchController from '../controllers/branchController';
const router = express.Router();

router.get('/', branchController.getAllBranches);
router.get('/:id',branchController.getBranchesById);
router.post('/', branchController.createBranch);
router.put('/:id', branchController.updateBranch);
router.delete('/:id', branchController.deleteBranch);

export default Router;