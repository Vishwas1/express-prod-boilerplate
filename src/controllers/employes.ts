import {Employee} from '../services/employee';

async function addEmployee(req, res){
    try{
        const {fName, lName, email, role} =  req.body;
        if(fName == "" || lName == "" || email == "" || role == "") throw new Error("All fields are mandatory")
        const empObj = new Employee(req.body);
        const newEmp = await empObj.addEmployee();
        res.status(200).json({newEmp});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}


async function getAllEmployee(req, res){
    try{
        const empObj = new Employee({});
        const listOfEmployee = await empObj.fetchAllEmployees();
        res.status(200).json({listOfEmployee});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export default {
    addEmployee,
    getAllEmployee
}