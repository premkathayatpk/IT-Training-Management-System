import { NavLink } from "react-router-dom";
import favicon from "/favicon.png";


const Header = () => {
  return (
    <header className=" top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-full mx-auto px-6 h-16 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-3 group transition-all"
        >
          <img
            className="w-10 h-10 object-contain group-hover:scale-105 "
            src={favicon}
            alt="NepTech Academy Logo"
          />
          <span className="text-xl font-bold text-blue-800 tracking-tight">
            NepTech <span className="text-orange-600">Academy</span>
          </span>
        </NavLink>

        <h1 className="  text-md font-semibold text-gray-500 uppercase ">
          Admin Dashboard
        </h1>

        <nav className="flex items-center gap-6">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
              AD
            </div>
            <span>Profile</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
