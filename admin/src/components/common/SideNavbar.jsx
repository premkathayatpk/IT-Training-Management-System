import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SideNavbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
        : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
    }`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Main Menu
          </h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 text-base font-medium">
          <NavLink to="/" className={navLinkClass}>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/users" className={navLinkClass}>
            <span>Users</span>
          </NavLink>

          <div className="pt-4 mt-4 border-t border-gray-100">
            <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
              Account
            </h2>
            <NavLink to="/login" className={navLinkClass}>
              <span>Login</span>
            </NavLink>

            <NavLink to="/logout" className={navLinkClass}>
              <span className="text-red-500">Logout</span>
            </NavLink>
          </div>
        </nav>
      </aside>

      <main className="flex-1 ml-64">
      </main>
    </div>
  );
};

export default SideNavbar;
