import e from "express";
import { authController } from "../controllers/authController.js";


export const authRouter = e.Router()

// dang ky 
authRouter.use('/register', authController.register)