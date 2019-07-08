import { IPerson } from './IPerson';
export class Employee implements IPerson{
  eid: string;
  fullname: string;

  constructor(eid: string, fullname: string){
    this.eid = eid;
    this.fullname = fullname;
  }
  toString(){
    const text = `Emp Id of ${this.fullname} is ${this.eid}`; 
    console.log(text)
    return text;
  }
}