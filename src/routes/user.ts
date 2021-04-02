import {Router} from 'express'
import UserRouter from '../controllers/user';
const router = Router();


router.post("/", UserRouter.addUser)
router.get("/:did", UserRouter.getUserByDID);


export default router;