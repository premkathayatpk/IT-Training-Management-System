import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AppRoutes from "../components/common/AppRoutes";

const Courses = () => {
  return (
    <main>
      <section>
        <div className="flex gap-8 bg-gray-600 text-white py-2 px-5">
          <NavLink to="programming">Programming</NavLink>
          <NavLink to="web-development">Web Development</NavLink>
          <NavLink to="data-science">Data Science and Analytics</NavLink>
          <NavLink to="design">Graphic Design</NavLink>
        </div>
      </section>
      <section className="bg-gray-200 py-5 px-5">
        
        <Outlet />
      </section>
    </main>
  );
};

export default Courses;
