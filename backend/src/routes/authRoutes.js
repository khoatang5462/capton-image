import e from "express";
import { authController } from "../controllers/authController.js";

export const authRoutes = e.Router()

authRoutes.post('/register', authController.register)


