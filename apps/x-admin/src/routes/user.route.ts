import express from "express";
import * as userController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.patch("/:id", userController.updateUserById);
userRouter.delete("/:id", userController.deleteUserById);

export default userRouter;
