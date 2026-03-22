import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  console.log("first");
  res.send("server start");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
