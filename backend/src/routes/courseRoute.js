import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourse,
  updateCourse,
} from "../controllers/courseController.js";

const courseRouter = express.Router();

courseRouter.post("/createCourse", createCourse);
courseRouter.get("/getAllCourse", getAllCourse);
courseRouter.delete("/deleteCourse/:id", deleteCourse);
courseRouter.patch("/updateCourse/:id", updateCourse);
courseRouter.get("/getCourse/:id", getCourse);

export default courseRouter;
