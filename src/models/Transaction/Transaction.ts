import {Schema, model} from "mongoose";
import { ITransaction } from "../entities";

const transactionSchema = new Schema<ITransaction>({
    id : {type: Number , required: true},
    type : {type: String},
    amount: {type: Number},
    date: {type: Date}
})
const Transaction = model('Transaction', transactionSchema);
export default Transaction;