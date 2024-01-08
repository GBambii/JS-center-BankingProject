import {Schema, model} from "mongoose";
import { IAccount} from "../entities";

const accountSchema = new Schema<IAccount>({
  id: { type: Number },
  owner: { type: Schema.Types.ObjectId, ref: "Customer" },
  type: { type: String },
  transaction: { type: Schema.Types.ObjectId, ref: "Transaction" },
  loan: { type: Schema.Types.ObjectId, ref: "Loan" },
});

const Account = model('Account', accountSchema);
export default Account;
