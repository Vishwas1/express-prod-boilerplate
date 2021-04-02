import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  userDID: string;
  email: string;
  name: string;
}

const UserSchema = new Schema({
  userDID: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true }
});

export default mongoose.model<IUser>("Users", UserSchema);
