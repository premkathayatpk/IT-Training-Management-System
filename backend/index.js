import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoute.js";
const app = express();
dotenv.config();

connectDB();

app.get("/", (req, res) => {
  console.log("first");
  res.send("server start");
});
app.use("/api/user", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
