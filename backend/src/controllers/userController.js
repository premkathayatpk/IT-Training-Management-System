import User from "../models/userModel.js";

export const register = async (req, res) => {
  console.log(req.body);
  res.send("register");
};

export const login = async (req, res) => {
  req.send("login");
};
