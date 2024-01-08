import {Schema, model} from "mongoose";
import { IProduct } from "../entities";

const productSchema = new Schema<IProduct>({
  id: { type: Number },
  name: { type: String },
  typeP: { type: String },
});

const Product = model('Product', productSchema);
export default Product;