import { Document, Schema, Types } from "mongoose";
export interface ICustomer extends Document{
    id : number,
    name: string,
    age: number,
    score: number,
    employeeId: number,
    employee?: IEmployee // Optional, allows you to access the related employee data
  }
export interface IProduct extends Document{
    id: number,
    name: string,
    typeP : string,
}
export interface ILoan extends Document{
    id : number,
    account: Schema.Types.ObjectId,
    amount : number,
    date: Date;
}
export interface IEmployee extends Document{
    id: Number,
    name: string,
    type: string,
    branch: Schema.Types.ObjectId,
    clientBase: Schema.Types.ObjectId;
}
export interface IClientBase extends Document{
    id: number,
    name: string,
    type: string,
    clients :Schema.Types.ObjectId;
}
export interface IManager extends Document{
    id: number,
    name: string,
    age: number,
    branch:Schema.Types.ObjectId;
}
export interface IBranch extends Document{
    id: number,
    name: string,
    location:string,
    manager:Schema.Types.ObjectId;
}
export interface IAccount extends Document{
    id: number,
    owner: Schema.Types.ObjectId,
    type:string,
    transaction: Schema.Types.ObjectId,
    loan:Schema.Types.ObjectId;
}
export interface ITransaction extends Document{
    id: number,
    type:string,
    amount:number,
    date:Date;
}