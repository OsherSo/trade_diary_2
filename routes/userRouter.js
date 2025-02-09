import { Router } from "express";

import { getCurrentUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/current-user", getCurrentUser);

export default userRouter;
