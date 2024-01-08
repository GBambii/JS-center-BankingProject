import { Request, Response } from 'express';
import ClientBase from '../models/ClientBase/ClientBase';

class clientBaseController {
    async getAllClientBase(_req: Request, res: Response) {
        try {
            const clientBase = await ClientBase.find();
            res.status(200).json({ message: "Success", data:clientBase });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getClientBaseById(req: Request, res: Response){
        const clientBaseId = req.params.id;
        try {
            const clientBase = await ClientBase.findById(clientBaseId);
            if (clientBase) {
                res.status(200).json({message:"Success", data:clientBase});
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new clientBaseController();