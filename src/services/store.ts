import { Employee } from './employee';
import { Customer } from './customer';
import { v4 as uuidv4 } from 'uuid'; 
export default class Store {
    employeeList: Map<string, Employee>;
    customerList: Map<string, Customer>;

    constructor(){
        this.employeeList = new Map();
        this.customerList = new Map();
    }    

    add(item: Employee | Customer) : Promise<Employee | Customer>{
        return new Promise((resolve, reject) => {
            item.id = uuidv4();
            if(item instanceof Employee){
                this.employeeList.set(item.id, item)
                resolve(item);
            }

            if(item instanceof Customer){
                this.customerList.set(item.id, item)
                resolve(item);
            }
            reject();
        })
    }

    findAll(type: Employee | Customer): Promise<Array<Employee | Customer>>{
        return new Promise((resolve, reject) => {
            if(type instanceof Employee){
                console.log(this.employeeList)
                resolve(Array.from(this.employeeList.values()));
            }

            if(type instanceof Customer){
                resolve(Array.from(this.customerList.values()));
            }
            reject();
        })
    }

}