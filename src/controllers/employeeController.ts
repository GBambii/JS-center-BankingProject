import { Request, Response } from 'express';
import Employee from '../models/employee/Employee';

class employeeController {
    async getAllEmployees(_req: Request, res: Response) {
        try {
            const employee = await Employee.find();
            res.status(200).json({ message: "Success", data: employee });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getEmployeeById(req: Request, res: Response){
        const employeeId = req.params.id;
        try {
            const employee = await Employee.findById(employeeId);
            if (employee) {
                res.status(200).json({message:"Success", data:employee});
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createEmployee(req: Request, res: Response){
        try {
            const createdEmployee = await Employee.create(req.body);
            res.status(201).json({status:"Success", data:createdEmployee});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateEmployee(req: Request, res: Response){
        try {
            const editedEmployee = await Employee.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedEmployee) {
                res.status(200).json({status: "Success", data: editedEmployee});
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteEmployee(req: Request, res: Response){
        const employeeId = req.params.id;
        try {
            const deletedEmployee = await Employee.findByIdAndDelete(employeeId);

            if (deletedEmployee) {
                res.status(204).json({status:"Success", data:deletedEmployee});
            } else {
                res.status(404).json({ message: 'Employee not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new employeeController();
