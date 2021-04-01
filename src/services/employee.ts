import EmployeeModel, {IEmployee, Role} from '../models/employee';
import { v4 as uuidv4 } from 'uuid'; 

export class Employee{
  
  empId: string;
  id: string;

  firstName: string;
  lastName: string;  
  email: string;
  address: string;
  dob: string;
  role:Role;
  
  constructor({ firstName = "", lastName = "", email = "", role = "", address = "", dob = "" } = {}){
    this.firstName = firstName ? firstName.trim(): "";
    this.lastName = lastName ? lastName.trim(): "";
    this.email = email;
    this.address = address;
    this.role = role? Role[role]: "";
    this.dob = dob;
    this.empId = uuidv4();
  }

  async addEmployee(): Promise<IEmployee>{
    const newEmployee:IEmployee = await EmployeeModel.create({
      ...this
    })
    return newEmployee;
  }

  async fetchAllEmployees(): Promise<Array<IEmployee>>{
    const employeeList:Array<IEmployee> = await EmployeeModel.find({});
    return employeeList;
  }

}