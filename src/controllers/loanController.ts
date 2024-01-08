import { Request, Response } from 'express';
import Loan from '../models/Loan/Loan';

class loanController {
    async getAllLoans(_req: Request, res: Response) {
        try {
            const loan = await Loan.find();
            res.status(200).json({ message: "Success", data: loan });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getLoansById(req: Request, res: Response){
        const loanId = req.params.id;
        try {
            const loan = await Loan.findById(loanId);
            if (loan) {
                res.status(200).json({message:"Success", data:loan});
            } else {
                res.status(404).json({ message: 'Loan not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createLoan(req: Request, res: Response){
        try {
            const createdLoan = await Loan.create(req.body);
            res.status(201).json({status:"Success", data:createdLoan});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateLoan(req: Request, res: Response){
        try {
            const editedLoan= await Loan.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedLoan) {
                res.status(200).json({status: "Success", data: editedLoan});
            } else {
                res.status(404).json({ message: 'Loan not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteLoan(req: Request, res: Response){
        const loanId = req.params.id;
        try {
            const deletedLoan = await Loan.findByIdAndDelete(loanId);

            if (deletedLoan) {
                res.status(204).json({status:"Success", data:deletedLoan});
            } else {
                res.status(404).json({ message: 'Loan not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new loanController();