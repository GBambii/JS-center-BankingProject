import { Request, Response } from 'express';
import Manager from '../models/Manager/Manager';

class managerController {
    async getAllManagers(_req: Request, res: Response) {
        try {
            const manager = await Manager.find();
            res.status(200).json({ message: "Success", data: manager });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getManagersById(req: Request, res: Response){
        const managersId = req.params.id;
        try {
            const manager = await Manager.findById(managersId);
            if (manager) {
                res.status(200).json({message:"Success", data:manager});
            } else {
                res.status(404).json({ message: 'Manager not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createManager(req: Request, res: Response){
        try {
            const createdManager = await Manager.create(req.body);
            res.status(201).json({status:"Success", data:createdManager});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateManager(req: Request, res: Response){
        try {
            const editedManager= await Manager.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedManager) {
                res.status(200).json({status: "Success", data: editedManager});
            } else {
                res.status(404).json({ message: 'Manager not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteManager(req: Request, res: Response){
        const managerId = req.params.id;
        try {
            const deletedManager = await Manager.findByIdAndDelete(managerId);

            if (deletedManager) {
                res.status(204).json({status:"Success", data:deletedManager});
            } else {
                res.status(404).json({ message: 'Manager not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new managerController();
