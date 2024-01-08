import { Request, Response } from 'express';
import Account from '../models/Account/Account';

class accountController {
    async getAllAccounts(_req: Request, res: Response) {
        try {
            const account = await Account.find();
            res.status(200).json({ message: "Success", data: account });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getAccountsById(req: Request, res: Response){
        const accountId = req.params.id;
        try {
            const account = await Account.findById(accountId);
            if (account) {
                res.status(200).json({message:"Success", data:account});
            } else {
                res.status(404).json({ message: 'Account not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createAccount(req: Request, res: Response){
        try {
            const createdAccount = await Account.create(req.body);
            res.status(201).json({status:"Success", data:createdAccount});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateAccount(req: Request, res: Response){
        try {
            const editedAccount= await Account.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedAccount) {
                res.status(200).json({status: "Success", data: editedAccount});
            } else {
                res.status(404).json({ message: 'Account not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteAccount(req: Request, res: Response){
        const accountId = req.params.id;
        try {
            const deletedAccount = await Account.findByIdAndDelete(accountId);

            if (deletedAccount) {
                res.status(204).json({status:"Success", data:deletedAccount});
            } else {
                res.status(404).json({ message: 'Account not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new accountController();
