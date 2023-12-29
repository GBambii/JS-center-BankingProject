import {Schema, model} from "mongoose";
import { ICustomer } from "../entities";



const customerSchema = new Schema<ICustomer>({
    id : {type: Number},
    name: {type: String},
    age: {type: Number},
    score: {type: Number},
})
const Customer = model('Customer', customerSchema);
export default Customer;