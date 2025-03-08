import e from "express";
import { authRouter } from "./authRouters.js";

export const rootRouters = e.Router();




rootRouters.use('/auth', authRouter)