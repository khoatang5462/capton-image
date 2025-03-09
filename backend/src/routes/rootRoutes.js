import e from "express";

import { authRoutes } from "./authRoutes.js";



const rootRoutes = e.Router()


rootRoutes.use('/auth', authRoutes)


export default rootRoutes