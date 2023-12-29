import {Schema, model} from "mongoose";
import { IClientBase } from "../entities";

const clientBase = new Schema<IClientBase>({
    
})
clientBaseSchema.pre(/^find/, function(next){
    this.populate({
        path: 'personList'
    })
    next();
})

const clientBase = model('clientBase', clientBaseSchema);
export default clientBase;