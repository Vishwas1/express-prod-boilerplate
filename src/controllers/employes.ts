import { Employee } from "../services/employee";
import { logger } from "../config";

async function addEmployee(req, res) {
  try {
    const { firstName, lastName, email, role } = req.body;
    if (firstName == "" || lastName == "" || email == "" || role == "")
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

async function getAllEmployee(req, res) {
  try {
    const empObj = new Employee({});
    const listOfEmployee = await empObj.fetchAllEmployees();
    res.send(listOfEmployee);
  } catch (e) {
    logger.error('EmployeeCtrl:: getAllEmployee(): Error ' + e);
    res.status(500).send(e.message);
  }
}

async function getEmployeeById(req, res) {
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
