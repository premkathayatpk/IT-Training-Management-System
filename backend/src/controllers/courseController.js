import { json } from "express";
import Course from "../models/courseModel.js";

export const createCourse = async (req, res) => {
  const {
    title,
    syllabus,
    fee,
    description,
    enrollDeadline,
    prerequisites,
    category,
  } = req.body;

  if (
    !title ||
    !syllabus ||
    !fee ||
    !description ||
    !enrollDeadline ||
    !category ||
    !prerequisites
  ) {
    return res.status(400).json({ message: "All field must be filled !" });
  }
  let courseExist = await Course.findOne({ title });
  if (courseExist) {
    return res.status(409).json({ message: "Course already exist" });
  }

  try {
    let courseRes = new Course({
      title,
      syllabus,
      fee,
      description,
      enrollDeadline,
      prerequisites,
      category,
    });
    courseRes = await courseRes.save();
    res.status(200).json({ message: "Course Created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const updateCourse = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updateCourse = await Course.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updateCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      updateCourse,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error ",
    });
  }
};
export const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCourse = await Course.findByIdAndDelete(id);
    if (!deleteCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
      deleteCourse,
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error ",
    });
  }
};
export const getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const getCourse = await Course.findById(id);
    if (!getCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course get successfully",
      getCourse,
    });
  } catch (error) {
    console.error("get Error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error ",
    });
  }
};
export const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find({});
    if (!courses || courses.length === 0) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "No courses in database",
      });
    }
    res.status(200).json({
      status: 200,
      success: true,
      count: courses.length,
      message: "All courses retrieved successfully",
      courses,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error while fetching courses",
      error: error.message,
    });
  }
};
