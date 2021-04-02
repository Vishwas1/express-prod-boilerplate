import { logger } from "../config";
import { Request, Response } from "express";
import UserModel, { IUser } from "../models/user.model";

async function addUser(req: Request, res: Response) {
  try {
    const { did, email, name } = req.body;
    // if (firstName == "" || lastName == "" || email == "" || role == "" || dob == "")
    //   res
    //     .status(400)
    //     .send("firstName, lastName, email, role fields are mandatory");

    const newEmp: IUser = await UserModel.create({
      userDID: did,
      email,
      name,
    });
    res.send(newEmp);
  } catch (e) {
    logger.error("UserCtrl:: addUser(): Error " + e);
    res.status(500).send(e.message);
  }
}

async function getAllUser(req: Request, res: Response) {
  // try {
  //   const empObj = new User({});
  //   const listOfUser = await empObj.fetchAllUsers();
  //   res.send(listOfUser);
  // } catch (e) {
  //   logger.error('UserCtrl:: getAllUser(): Error ' + e);
  //   res.status(500).send(e.message);
  // }
}

async function getUserByDID(req: Request, res: Response) {
  // try {
  //   const { did } = req.params;
  //   if (!did) res.status(400).send("Item id is mandatory");
  //   const empObj = new User({});
  //   const listOfUser = await empObj.fetchAllUsers();
  //   const emp = listOfUser.filter((x) => x.did === did);
  //   res.send(emp);
  // } catch (e) {
  //   logger.error('UserCtrl:: getUserById(): Error ' + e);
  //   res.status(500).send(e.message);
  // }
}

export default {
  addUser,
  getUserByDID,
};
