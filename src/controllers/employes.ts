import { Employee } from "../services/employee";
import { logger } from "../config";
import { Request, Response } from 'express';

async function addEmployee(req: Request, res: Response){
  try {
    const { firstName, lastName, email, role, dob } = req.body;
    if (firstName == "" || lastName == "" || email == "" || role == "" || dob == "")
      res
        .status(400)
        .send("firstName, lastName, email, role fields are mandatory");
    const empObj = new Employee(req.body);
    const newEmp = await empObj.addEmployee();
    res.send(newEmp);
  } catch (e) {
    logger.error('EmployeeCtrl:: addEmployee(): Error ' + e);
    res.status(500).send(e.message);
  }
}

async function getAllEmployee(req: Request, res: Response) {
  try {
    const empObj = new Employee({});
    const listOfEmployee = await empObj.fetchAllEmployees();
    res.send(listOfEmployee);
  } catch (e) {
    logger.error('EmployeeCtrl:: getAllEmployee(): Error ' + e);
    res.status(500).send(e.message);
  }
}

async function getEmployeeById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    if (!id) res.status(400).send("Item id is mandatory");

    const empObj = new Employee({});
    const listOfEmployee = await empObj.fetchAllEmployees();
    const emp = listOfEmployee.filter((x) => x.id === id);
    res.send(emp);
  } catch (e) {
    logger.error('EmployeeCtrl:: getEmployeeById(): Error ' + e);
    res.status(500).send(e.message);
  }
}

export default {
  addEmployee,
  getAllEmployee,
  getEmployeeById,
};
