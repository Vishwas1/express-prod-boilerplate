import { Employee } from './employee';
import { Customer } from './customer';
import { v4 as uuidv4 } from 'uuid'; 
import { logger } from "../config";
export default class Store {
    employeeList: Map<string, Employee>;
    customerList: Map<string, Customer>;

    constructor(){
        this.employeeList = new Map();
        this.customerList = new Map();
    }    

    add(item: Employee | Customer) : Promise<Employee | Customer>{
        logger.info('Store:: add() called')
        return new Promise((resolve, reject) => {
            item.id = uuidv4();
            if(item instanceof Employee){
                logger.info('Store:: add(): item is an instance of Employee')
                logger.info('Store:: add(): adding item to employee list. id = ' + item.id);
                this.employeeList.set(item.id, item)
                logger.info('Store:: add(): iteam = ', item);
                resolve(item);
            }
            else if(item instanceof Customer){
                logger.info('Store:: add(): item is an instance of Customer')
                logger.info('Store:: add(): adding item to Customer list. id = ' + item.id);
                this.customerList.set(item.id, item)
                resolve(item);
            }
            else{
                reject();
            }
        })
    }

    findAll(type: Employee | Customer): Promise<Array<Employee | Customer>>{
        logger.info('Store:: findAll() called')
        return new Promise((resolve, reject) => {
            if(type instanceof Employee){
                logger.info('Store:: findAll(): type is an instance of Employee')
                resolve(Array.from(this.employeeList.values()));
            }
            else if(type instanceof Customer){
                logger.info('Store:: findAll(): type is an instance of Customer')
                resolve(Array.from(this.customerList.values()));
            }
            else {
                logger.info('Store:: findAll(): type is an instance of neither Customer nor Emplooyee. rejecting')
                reject();
            }
        })
    }

}