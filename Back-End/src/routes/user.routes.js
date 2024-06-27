import { Router } from "express";

import {
  createIncident,
  getAllIncidents,
} from "../controllers/incident.controller.js";
const userRouter = Router();

userRouter.post("/createIncident", createIncident);
userRouter.get("/getIncident", getAllIncidents);

export default userRouter;
