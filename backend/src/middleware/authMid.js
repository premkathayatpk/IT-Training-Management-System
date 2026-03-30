import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const authMid = async (req, res, next) => {
  try {
    const token = req.cookies.jwt_token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not Provided, please login",
      });
    }

    // 1. Move verification INSIDE try/catch to handle expired/fake tokens
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // 2. findById takes the ID string directly
    const userInfo = await User.findById(decoded.id).select("-password");

    if (!userInfo) {
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });
    }

    req.userInfo = userInfo;
    next();
  } catch (error) {
    // 3. Handle specific JWT errors so the frontend knows WHY it failed
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Session expired, please login again" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    console.error("Auth Middleware Error:", error);
    res
      .status(500)
      .json({ message: "Internal server Error!", error: error.message });
  }
};

export default authMid;
