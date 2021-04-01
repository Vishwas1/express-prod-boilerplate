import mongoose, { Schema, Document } from "mongoose";

export enum Role {
  MANAGER = "MANAGER",
  DEVELOPER = "DEVELOPER",
  TESTER = "TESTER",
  RESEARCHE = "RESEARCHER",
}

export interface IEmployee extends Document {
  empId: string;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  dob: string;
  role: Role;
}

const EmployeeSchema = new Schema({
  empId: { type: String, required: true },
  id: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(Role) },
});

export default mongoose.model<IEmployee>("Employees", EmployeeSchema);
