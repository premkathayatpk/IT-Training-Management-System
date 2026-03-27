import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  const image = req.file?.filename;
  const { userName, email, password, phone } = req.body;

  if (!userName || !email || !password || !image || !phone) {
    return res.status(400).json({ message: "All filed must filled !" });
  }

  let userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(409).json({ message: "User already exist !" });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    let userRes = new User({
      image,
      userName,
      password: hashPassword,
      email,
      phone,
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

    return res.status(200).json({
      success: true,
      message: "Login Successfully",
      user: {
        id: userExist._id,
        userName: userExist.userName,
        email: userExist.email,
        image: userExist.image,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
