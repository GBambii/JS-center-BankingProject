import {Schema, model} from "mongoose";
import { ILoan } from "../entities";

const loanSchema = new Schema<ILoan>({
    id : {type: Number , required: true},
    account:  {type: Schema.Types.ObjectId, ref: 'Account'},
    amount: {type: Number},
    date: {type: Date}
})
const Loan = model('Loan', loanSchema);
export default Loan;