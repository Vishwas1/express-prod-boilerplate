import { IPerson } from './IPerson';
export class Customer implements IPerson{
  custId: string;
  fullname: string;

  constructor(custId: string, fullname: string){
    this.custId = custId;
    this.fullname = fullname;
  }
  toString(){
    const text = `CustomerId Id of ${this.fullname} is ${this.custId}`; 
    console.log(text)
    return text;
  }
}