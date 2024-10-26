import express from "express";
import { see, logout, edit, deleteUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/:id", see);
userRouter.get("/:id/edit", edit);
userRouter.get("/:id/delete", deleteUser);

export default userRouter;
