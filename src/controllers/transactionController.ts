import { Request, Response } from 'express';
import Transaction from '../models/Transaction/transaction';

class transactionController {
    async getAllTransactions(_req: Request, res: Response) {
        try {
            const transaction = await Transaction.find();
            res.status(200).json({ message: "Success", data: transaction });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getTransactionsById(req: Request, res: Response){
        const transactionId = req.params.id;
        try {
            const transaction = await Transaction.findById(transactionId);
            if (transaction) {
                res.status(200).json({message:"Success", data:loan});
            } else {
                res.status(404).json({ message: 'Transaction not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createTransaction(req: Request, res: Response){
        try {
            const createdTransaction = await Transaction.create(req.body);
            res.status(201).json({status:"Success", data:createdTransaction});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateTransaction(req: Request, res: Response){
        try {
            const editedTransaction= await Transaction.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedTransaction) {
                res.status(200).json({status: "Success", data: editedTransaction});
            } else {
                res.status(404).json({ message: 'Transaction not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteTransaction(req: Request, res: Response){
        const transactionId = req.params.id;
        try {
            const deletedTransaction = await Transaction.findByIdAndDelete(transactionId);

            if (deletedTransaction) {
                res.status(204).json({status:"Success", data:deletedTransaction});
            } else {
                res.status(404).json({ message: 'Transaction not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new transactionController();