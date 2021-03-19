import { IPerson } from '../models/IPerson';
import config from '../config';
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

  toString(){
   return ""
  }

  getAge(){
    return 0;
  }

  getFullName(){
    return this.firstName + ' ' + this.lastName;
  }

  async addEmployee(){
    // this.empId = 'emp_001';
    return  await config.db.add(this);
  }

  async fetchAllEmployees(){
    return await config.db.findAll(this);
  }

}