import {Schema, model} from "mongoose";
import { IClientBase } from "../entities";

const clientBaseSchema = new Schema<IClientBase>({
    id : {type: Number},
    name: {type: String},
    type: {type: String},
    clients: {type: Schema.Types.ObjectId, ref: "Customer"}
})
const ClientBase = model('ClientBase', clientBaseSchema);
export default ClientBase;