import React from "react";
import { NavLink } from "react-router-dom";

const MyCourse = () => {
  return (
    <div>
      <NavLink to="instructor/crateCourse">CrateCourse</NavLink>
      <NavLink to="instructor/updateCourse">Update</NavLink>
    </div>
  );
};

export default MyCourse;
