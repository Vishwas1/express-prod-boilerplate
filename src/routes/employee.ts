import { Router } from "express";
import EmployeeController from "../controllers/employes";

const router = Router();

router.post("/", EmployeeController.addEmployee);

// Update
router.put("/", (req, res) => {
    res.json({ message: "Hello World" });
});

// Retrive
router.get("/", EmployeeController.getAllEmployee);
// Retrive
router.get("/:id", EmployeeController.getEmployeeById);

// Delete
router.delete("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
