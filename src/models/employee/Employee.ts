import {Schema, model} from "mongoose";
import { IEmployee } from "../entities";

const employeeSchema = new Schema<IEmployee>({
  id: { type: Number },
  name: { type: String },
  type: { type: String },
  branch: {  type: Schema.Types.ObjectId, ref: 'Branch' },
  clientBase: [{ type: Schema.Types.ObjectId, ref: 'ClientBase' }]
});

const Employee = model('Employee', employeeSchema);
export default Employee;
