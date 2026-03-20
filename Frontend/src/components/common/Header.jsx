import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import logo from "/image/logo.png";

const Header = () => {
  return (
    <div className="bg-gray-800 items-center py-4 text-xl font-semibold text-white flex justify-around ">
      <div>
        <NavLink to="/">
          <img className="h-12 " src={logo} alt="Logo" />
        </NavLink>
      </div>
      <NavLink to="/" className="hover:text-blue-500 ">
        Home
      </NavLink>
      <NavLink to="/courses" className="hover:text-blue-500 ">
        Courses
      </NavLink>
      <NavLink to="/about" className="hover:text-blue-500 ">
        About
      </NavLink>
      <NavLink to="/blog" className="hover:text-blue-500 ">
        Blog
      </NavLink>
      <NavLink to="/contact" className="hover:text-blue-500 ">
        Contact Us
      </NavLink>

      <div className="flex items-center gap-1">
        <input
          type="text"
          className="border rounded-sm px-2 py-1 bg-white text-black"
          placeholder="Search"
        />
        <FaSearch className="hover:text-blue-500" />
      </div>

      <NavLink to="/cart" className="hover:text-blue-500 ">
        <FaCartArrowDown />
      </NavLink>
      <NavLink to="/profile" className="hover:text-blue-500 ">
        <FaUserCircle />
      </NavLink>
    </div>
  );
};

export default Header;
