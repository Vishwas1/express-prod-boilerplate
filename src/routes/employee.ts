import {Router} from 'express';
import EmployeeController from '../controllers/employes';

const router = Router();

// Create
router.post('/add', EmployeeController.addEmployee)

// Update
router.put('/update', (req, res) => {
    res.json({message: 'Hello World'})
})

// Retrive
router.get('/', EmployeeController.getAllEmployee)

// Delete
router.delete('/delete', (req, res) => {
    res.json({message: 'Hello World'})
})


export default router;