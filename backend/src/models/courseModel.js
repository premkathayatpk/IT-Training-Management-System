import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      unique: true,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    syllabus: {
      type: String,
      trim: true,
      required: [true, "Syllabus is required"],
    },
    fee: {
      type: Number,
      required: [true, "Fee is required"],
      min: [0, "Fee cannot be a negative number"],
    },
    enrollDeadline: {
      type: Date,
      required: [true, "Enrollment deadline is required"],
      validate: {
        validator: function (value) {
          return value > Date.now();
        },
        message: "Deadline must be in the future",
      },
    },
    prerequisites: {
      type: String,
      trim: true,
      default: "None",
    },
  },
  { timestamps: true },
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
