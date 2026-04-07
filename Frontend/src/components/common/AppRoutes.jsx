import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../pages/student/About";
import Contact from "../../pages/student/Contact";
import Home from "../../pages/student/Home";
import Profile from "../../pages/student/Profile";
import Courses from "../../pages/student/Courses";
import CoursesDetail from "../../pages/student/CoursesDetail";
import Programming from "../../pages/student/Programming";
import WebDevelopment from "../../pages/student/WebDevelopment";
import Design from "../../pages/student/Design";
import DataScience from "../../pages/student/DataScience";
import Wishlist from "../../pages/student/Wishlist";
import Blog from "../../pages/student/Blog";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Logout from "../../pages/Logout";
import Dashboard from "../../pages/instructor/Dashboard";
import InstructorProtect from "../../pages/instructor/InstructorProtect";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyCourse from "../../pages/instructor/MyCourse";
import CratecCourse from "../../pages/instructor/CratecCourse";
import UpdateCourse from "../../pages/instructor/UpdateCourse";

const AppRoutes = () => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) return <div>Loading...</div>; // Prevent redirecting while checking auth

  return (
    <Routes>
      {/* --- STUDENT / PUBLIC ROUTES --- */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/profile" element={<Profile />} />

      {/* Nested Course Categories */}
      <Route path="/courses" element={<Courses />}>
        <Route index element={<Programming />} /> {/* Default sub-route */}
        <Route path="programming" element={<Programming />} />
        <Route path="web-development" element={<WebDevelopment />} />
        <Route path="data-science" element={<DataScience />} />
        <Route path="design" element={<Design />} />
      </Route>
      <Route path="/courses/:id" element={<CoursesDetail />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />

      {/* --- INSTRUCTOR ROUTES --- */}
      {/* We use the Protect component as a wrapper for the parent route */}
      <Route
        path="/instructor"
        element={
          <InstructorProtect>
            {/* This acts as a Layout for all instructor sub-routes */}
            <Dashboard />
            <MyCourse />
          </InstructorProtect>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route
          path="dashboard"
          element={<div>Instructor Dashboard Content</div>}
        />
        <Route path="myCourses" element={<MyCourse />} />
        <Route path="crateCourse" element={<CratecCourse />} />
        <Route path="updateCourse" element={<UpdateCourse />} />
      </Route>

      {/* Catch-all for 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
