import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Cart from "../../pages/Cart";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Courses from "../../pages/Courses";
import CoursesDetail from "../../pages/CoursesDetail";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/CoursesDetail" element={<CoursesDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
