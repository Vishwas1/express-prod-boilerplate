////// This is just for an example

import { IPerson } from '../models/IPerson';
export class Customer implements IPerson{
  custId: string;
  firstName: string;
  lastName: string;  
  email: string;
  address: string;
  dob: string;
  id: string;
  constructor(custId: string){
    this.custId = custId;
  }
  toString(){
    return ""
   }
 
   getAge(){
     return 0;
   }
 
   getFullName(){
     return this.firstName + ' ' + this.lastName;
   }
}