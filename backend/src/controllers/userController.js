import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  const profile = req.file?.filename;
  const { userName, email, password, phone, role, bio } = req.body;

  if (!userName || !email || !password || !profile || !phone || !role) {
    return res.status(400).json({ message: "All filed must filled !" });
  }

  let userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(409).json({ message: "User already exist !" });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    let userRes = new User({
      profile,
      userName,
      password: hashPassword,
      email,
      phone,
      role,
      bio,
    });
    userRes = await userRes.save();
    res.status(201).json({ message: "User register successfuly!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "All field must be filled!",
      });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User Not Found. please register",
      });
    }

    const isMatchPassword = await bcrypt.compare(password, userExist.password);
    if (!isMatchPassword) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Credentials do Not Match!",
      });
    }

    const token = jwt.sign(
      {
        id: userExist._id,
        role: userExist.role,
        email: userExist.email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1d",
      },
    );
    const cookieOptions = {
      httpOnly: true, // Correct: Prevents XSS attacks
      secure: false, // Use 'false' for localhost (HTTP). Set to 'true' in production (HTTPS).
      sameSite: "lax", // Vital for cross-site cookie sharing on localhost
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    };

    return res
      .status(200)
      .cookie("jwt_token", token, cookieOptions) // Pass the options here
      .json({
        success: true,
        message: `Welcome back ${userExist.userName}`,
        user: {
          _id: userExist._id,
          userName: userExist.userName,
          email: userExist.email,
          role: userExist.role,
          profile: userExist.profile,
        },
        token, // Optional: You can still send it in JSON if you want
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "User found",
    user: req.userInfo,
  });
};

export const logout = async (req, res) => {
  res.clearCookie("jwt_token").status(200).json({
    status: 200,
    success: true,
    message: "User logout successfully",
  });
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find().select("-password -__v");

    if (!users || users.length === 0) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "No users in database",
      });
    }
    res.status(200).json({
      status: 200,
      success: true,
      count: users.length,
      message: "All users retrieved successfully",
      users,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error while fetching users",
      error: error.message,
    });
  }
};
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const resetToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_TOKEN,
      {
        expiresIn: "1d",
      },
    );
    res.status(200).json({
      success: true,
      message: "Reset token successfully",
      resetToken,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
