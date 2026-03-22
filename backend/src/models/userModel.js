import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "admin", "instructor"],
    default: "student",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
