import { Router } from "express";
import EmployeeController from "../controllers/employes";

export default (hypersign) => {
  const router = Router();

  router.post("/", hypersign.authorize.bind(hypersign), EmployeeController.addEmployee);

  // Update
  router.put("/", hypersign.authorize.bind(hypersign), (req, res) => {
    res.json({ message: "Hello World" });
  });

  // Retrive
  router.get("/", hypersign.authorize.bind(hypersign), EmployeeController.getAllEmployee);
  // Retrive
  router.get("/:id", hypersign.authorize.bind(hypersign), EmployeeController.getEmployeeById);

  // Delete
  router.delete("/", hypersign.authorize.bind(hypersign), (req, res) => {
    res.json({ message: "Hello World" });
  });

  return router;
};
