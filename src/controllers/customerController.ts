import { Request, Response } from 'express';
import Customers from '../models/customers/Customers';
class customerController {
    async getAllCustomers(_req: Request, res: Response) {
        try {
            const customers = await Customers.find();
            res.status(200).json({ message: "Success", data: customers });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getCustomerById(req: Request, res: Response){
        const customersId = req.params.id;
        try {
            const customers = await Customers.findById(customersId);
            if (customers) {
                res.status(200).json({message:"Success", data:customers});
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createCustomer(req: Request, res: Response){
        try {
            const createdCustomer = await Customers.create(req.body);
            res.status(201).json({status:"Success", data:createdCustomer});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateCustomer(req: Request, res: Response){
        try {
            const editedCustomer = await Customers.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedCustomer) {
                res.status(200).json({status: "Success", data: editedCustomer});
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteCustomer(req: Request, res: Response){
        const customerId = req.params.id;

        try {
            const deletedCustomer = await Customers.findByIdAndDelete(customerId);

            if (deletedCustomer) {
                res.status(204).json({status:"Success", data:deletedCustomer});
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new customerController();
