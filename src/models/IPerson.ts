export interface IPerson{
  id:string;
  
  firstName: string;
  lastName: string;  
  email: string;
  address: string;
  dob: string;

  getAge(): number;
  getFullName(): string;
  toString(): string;
}