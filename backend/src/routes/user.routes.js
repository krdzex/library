import express from "express";
import userController from "../controller/user.controller";

const router = express.Router()

router.route("/register").post(userController.createUser)



export default router;