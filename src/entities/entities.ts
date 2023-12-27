export interface ICustomer{
    id : number,
    name: string,
    age: number,
    role: string
}
export interface Iproduct{
    id: number,
    name: string,
    typeP : string,
   
    
}
export interface Iorder{
    id : number,
    type: string,
    status : boolean,
    customerId: ICustomer[]
}
export interface Iemployee{
    id: number,
    name: string,
    type: string,
    
}
export interface IClientBase{
    id: number,
    name: string,
    type: string,
    clientBase : ICustomer[]
}
