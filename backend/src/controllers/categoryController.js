import Category from "../models/category.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const isExist = await Category.findOne({ name });
    if (isExist) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = await Category.create({ name });

    res.status(201).json({
      success: true,
      data: category,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});

    if (!categories || categories.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "Get Category successfully",
      categories,
    });
  } catch (error) {
    res.status(500).json({
      message: "INternal server error",
      error: error.message,
    });
  }
};
