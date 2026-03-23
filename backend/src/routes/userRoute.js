import express from "express";
import { register } from "../controllers/userController.js";
import upload from "../middleware/upload.js";

const userRouter = express.Router();
userRouter.post("/register", upload.single("image"), register);

export default userRouter;
