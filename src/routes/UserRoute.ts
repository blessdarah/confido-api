import express from "express";
import { UserController } from "../controllers/UserController";
const userRouter = express.Router();
// route: /api/user/
userRouter.get("/", UserController.index);
userRouter.post("/", UserController.index);
userRouter.get("/:id", UserController.show);
userRouter.patch("/:id", UserController.update);
userRouter.delete("/:id", UserController.show);

export default userRouter;
