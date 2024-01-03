import { Request, Response } from 'express';
import Branch from '../models/Branch/Branch';

class branchController {
    async getAllBranches(_req: Request, res: Response) {
        try {
            const branch = await Branch.find();
            res.status(200).json({ message: "Success", data: branch });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getBranchesById(req: Request, res: Response){
        const BranchesId = req.params.id;
        try {
            const branch= await Branch.findById(BranchesId);
            if (branch) {
                res.status(200).json({message:"Success", data:branch});
            } else {
                res.status(404).json({ message: 'Branch not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createBranch(req: Request, res: Response){
        try {
            const createdBranch = await Branch.create(req.body);
            res.status(201).json({status:"Success", data:createdBranch});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateBranch(req: Request, res: Response){
        try {
            const editedBranch= await Branch.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedBranch) {
                res.status(200).json({status: "Success", data: editedBranch});
            } else {
                res.status(404).json({ message: 'Branch not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteBranch(req: Request, res: Response){
        const branchId = req.params.id;
        try {
            const deletedBranch = await Branch.findByIdAndDelete(branchId);

            if (deletedBranch) {
                res.status(204).json({status:"Success", data:deletedBranch});
            } else {
                res.status(404).json({ message: 'Branch not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new branchController();
