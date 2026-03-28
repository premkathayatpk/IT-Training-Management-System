import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMid = async (req, res, next) => {
  const token = req.cookies.jwt_token;
  if (!token) {
    return res.status(403).json({
      status: 403,
      success: false,
      message: "Token not Provided plz login",
    });
  }

  const verified_token = jwt.verify(token, process.env.TOKEN_KEY);
  try {
    let userInfo = await User.findById({ _id: verified_token.id });
    if (!userInfo) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not Found",
      });
    }
    req.userInfo = userInfo;
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server Error!", error });
  }
};
export default authMid;
