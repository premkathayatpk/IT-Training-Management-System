import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import favicon from "/favicon.png";

const AdminLayout = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm h-16">
        <div className="max-w-full mx-auto px-6 h-full flex justify-between items-center">
          <NavLink
            to="/admin"
            className="flex items-center gap-3 group transition-all"
          >
            <img src={favicon} alt="logo" className="w-12" />
            <span className="text-xl font-bold text-blue-800 tracking-tight">
              NepTech <span className="text-orange-600">Academy</span>
            </span>
          </NavLink>

          <h1 className="hidden md:block text-md font-semibold text-gray-500 uppercase">
            Admin Dashboard
          </h1>

          <nav className="flex items-center gap-6">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                `flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
              <span className="hidden sm:inline">Profile</span>
            </NavLink>
          </nav>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-[calc(100vh-64px)] overflow-y-auto">
          <div className="p-6">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
              Main Menu
            </h2>
          </div>

          <nav className="flex-1 px-4 space-y-2 text-sm font-medium">
            <NavLink to="dashboard" end className={navLinkClass}>
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="users" className={navLinkClass}>
              <span>Users</span>
            </NavLink>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Account
              </h2>

              <NavLink to="logout" className={navLinkClass}>
                <span className="text-red-500">Logout</span>
              </NavLink>
            </div>
          </nav>
        </aside>

        <main className="ml-64 flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
