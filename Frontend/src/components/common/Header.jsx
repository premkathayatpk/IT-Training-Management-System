import { NavLink } from "react-router-dom";
import { FaHeart, FaUserCircle, FaSearch } from "react-icons/fa"; // Swapped to FaHeart
import logo from "/image/logo.png";

const Header = () => {
  // Helper for active link styling
  const activeLink = ({ isActive }) =>
    isActive
      ? "text-blue-400 border-b-2 border-blue-400 pb-1 transition-all"
      : "hover:text-blue-400 transition-all pb-1";

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex">
          <NavLink to="/">
            <img
              className="h-10 md:h-12 w-auto hover:opacity-80 transition-opacity"
              src={logo}
              alt="NEPTECH Logo"
            />
          </NavLink>
        </div>

        {/* Navigation Links - Hidden on very small screens, scrollable on mobile if needed */}
        <nav className="hidden md:flex items-center gap-8 text-sm lg:text-base font-medium">
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/courses" className={activeLink}>
            Courses
          </NavLink>
          <NavLink to="/about" className={activeLink}>
            About
          </NavLink>
          <NavLink to="/blog" className={activeLink}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={activeLink}>
            Contact Us
          </NavLink>
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Search Bar - Modernized */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              className="bg-slate-800 border border-slate-700 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-slate-700 transition-all w-48 xl:w-64"
              placeholder="Search courses..."
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-blue-400" />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5 border-l border-slate-700 pl-6">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 scale-110"
                  : "hover:text-red-500 transition-transform hover:scale-110"
              }
              title="Wishlist"
            >
              <FaHeart size={22} />
            </NavLink>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "hover:text-blue-400 transition-transform hover:scale-110"
              }
              title="Profile"
            >
              <FaUserCircle size={24} />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
