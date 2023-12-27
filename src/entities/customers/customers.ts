import {Schema, model} from "mongoose";
import { ICustomer } from "../entities";



const customerSchema = new Schema<ICustomer>({
    id : number,
    name: string,
    age: number,
    role: string
    id :  {type: Number},
    name: {type: String},
    type: {type: String},
    isRetired: {type: "Boolean"}
})
