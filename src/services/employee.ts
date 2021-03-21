import { IPerson } from '../models/IPerson';
import {db} from '../config';
export enum Role {
  MANAGER, 
  DEVELOPER,
  TESTER,
  RESEARCHER
}

export class Employee implements IPerson{
  
  empId: string;
  id: string;

  firstName: string;
  lastName: string;  
  email: string;
  address: string;
  dob: string;

  role:Role;
  fullName: string;
  
  constructor({ firstName = "", lastName = "", email = "", role = "" } = {}){
    this.firstName = firstName ? firstName.trim(): "";
    this.lastName = lastName ? lastName.trim(): "";
    this.email = email;
    this.fullName = this.getFullName();
    this.address = "";
    this.role = role? Role[role] : "";
  }

  toString(): string{
   return ""
  }

  getAge(): number{
    return 0;
  }

  getFullName(): string{
    return this.firstName + ' ' + this.lastName;
  }

  async addEmployee(): Promise<any>{
    // this.empId = 'emp_001';
    return  await db.add(this);
  }

  async fetchAllEmployees(): Promise<any>{
    return await db.findAll(this);
  }

}