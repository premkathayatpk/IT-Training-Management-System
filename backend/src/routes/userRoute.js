import express from "express";
import { login, register } from "../controllers/userController.js";
import upload from "../middleware/upload.js";

const userRouter = express.Router();
userRouter.post("/register", upload.single("image"), register);
userRouter.post("/login", login);

export default userRouter;
