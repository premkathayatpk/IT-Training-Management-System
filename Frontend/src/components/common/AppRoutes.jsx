import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Courses from "../../pages/Courses";
import CoursesDetail from "../../pages/CoursesDetail";
import Programming from "../../pages/Programming";
import WebDevelopment from "../../pages/WebDevelopment";
import Design from "../../pages/Design";
import DataScience from "../../pages/DataScience";
import Wishlist from "../../pages/Wishlist";
import Blog from "../../pages/Blog";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Logout from "../../pages/Logout";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/courses/" element={<Courses />}>
          <Route path="" element={<Programming />} />
          <Route path="programming" element={<Programming />} />
          <Route path="web-Development" element={<WebDevelopment />} />
          <Route path="data-science" element={<DataScience />} />
          <Route path="design" element={<Design />} />
        </Route>
        <Route path="/CoursesDetail" element={<CoursesDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
