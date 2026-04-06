import express from "express";
import {
  createCategory,
  getAllCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.post("/create", createCategory);
categoryRouter.get("/getAll", getAllCategory);

export default categoryRouter;
