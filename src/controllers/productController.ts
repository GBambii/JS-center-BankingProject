import { Request, Response } from 'express';
import Product from '../models/Product/Product';

class productController {
    async getAllProducts(_req: Request, res: Response) {
        try {
            const product = await Product.find();
            res.status(200).json({ message: "Success", data: product });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async getProductsById(req: Request, res: Response){
        const productsId = req.params.id;
        try {
            const product = await Product.findById(productsId);
            if (product) {
                res.status(200).json({message:"Success", data:product});
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createProduct(req: Request, res: Response){
        try {
            const createdProduct = await Product.create(req.body);
            res.status(201).json({status:"Success", data:createdProduct});
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async updateProduct(req: Request, res: Response){
        try {
            const editedProduct= await Product.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (editedProduct) {
                res.status(200).json({status: "Success", data: editedProduct});
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async deleteProduct(req: Request, res: Response){
        const productId = req.params.id;
        try {
            const deletedProduct = await Product.findByIdAndDelete(productId);

            if (deletedProduct) {
                res.status(204).json({status:"Success", data:deletedProduct});
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new productController();
