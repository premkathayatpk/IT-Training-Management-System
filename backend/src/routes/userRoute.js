import express from "express";
import {
  forgetPassword,
  getAllUser,
  getUser,
  login,
  logout,
  register,
} from "../controllers/userController.js";
import upload from "../middleware/upload.js";
import authMid from "../middleware/authMid.js";

const userRouter = express.Router();
userRouter.post("/register", upload.single("image"), register);
userRouter.post("/login", login);
userRouter.get("/getUser", authMid, getUser);
userRouter.get("/logout", authMid, logout);
userRouter.get("/getAllUser", getAllUser);
userRouter.post("/forgetPassword", authMid, forgetPassword);

export default userRouter;
