import { Application, Request, Response } from 'express'
import express = require('express');
import { Employee } from './employee';
import { Customer } from './customer';

const app: Application = express();


app.get('/', (req: Request,res: Response) => {
  const employee =  new Employee('1234','Vishwas Anand');
  const customer = new Customer('12345', 'Zagg Networks');
  const foo =  {
    employee: employee.toString(),
    customer: customer.toString()
  }
  res.json(foo);
})

app.listen(5000, () => console.log('Server running on port 5000') );


