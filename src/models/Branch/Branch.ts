import {Schema, model} from "mongoose";
import { IBranch } from "../entities";

const branchSchema = new Schema<IBranch>({
 
    id : {type: Number, required: true},
    name: {type: String},
    location: {type: String},
    manager: { type: Schema.Types.ObjectId, ref: 'Manager' },
})
const Branch = model('Branch', branchSchema);
export default Branch;