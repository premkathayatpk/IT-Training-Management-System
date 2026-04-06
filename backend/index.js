import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoute.js";
import courseRouter from "./src/routes/courseRoute.js";
import cors from "cors";
import categoryRouter from "./src/routes/categoryRoute.js";
const app = express();
dotenv.config();

connectDB();

//App setting

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  }),
);
app.use("/images", express.static("public/images"));

app.use(cookieParser());

//Base Routes
app.use("/api/user", userRouter);
app.use("/api/course", courseRouter);
app.use("/api/category", categoryRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
