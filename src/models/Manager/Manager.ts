import {Schema, model} from "mongoose";
import { IManager } from "../entities";



const managerSchema = new Schema<IManager>({
 
    id : {type: Number , required: true},
    name: {type: String},
    age: {type: Number},
    branch: {type: Schema.Types.ObjectId, ref: 'Branch'},
    
})
const Manager = model('Manager', managerSchema);
export default Manager;