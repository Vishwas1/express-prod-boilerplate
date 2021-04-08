import {Router} from 'express'
import UserRouter from '../controllers/user';


export default ((hypersign) => {
    const router = Router();
    
    router.post('/hs/api/v2/auth', hypersign.authenticate.bind(hypersign), (req, res) => {
        try {
            const user = req.body.hsUserData;
            // Do something with the user data.
            res.status(200).send({ status: 200, message: "Success", error: null });
        } catch (e) {
            res.status(500).send({ status: 500, message: null, error: e.message });
        }
    })

    router.get('/protected', hypersign.authorize.bind(hypersign), (req, res) => {
        try {
            const user = req.body.userData;
            // Do whatever you want to do with it
            // Send a message or send to home page
            res.status(200).send("I am protected by Hypersign authentication");
        } catch (e) {
            res.status(500).send(e.message)
        }
    });

    router.post("/", UserRouter.addUser)
    router.get("/:did", UserRouter.getUserByDID);
    
    return router;
})
