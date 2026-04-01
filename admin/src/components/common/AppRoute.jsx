import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
import Profile from "../../pages/Profile";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import { AuthContext } from "../../context/AuthProvider";
import AdminProtect from "../../pages/AdminPRotect";
import AdminLayout from "./AdminLayout";

const AppRoute = () => {
  const { user, isLoading } = useContext(AuthContext);
  // console.log(user.role);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-2xl font-bold animate-pulse text-blue-600">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          !isLoading && user && user?.role === "admin" ? (
            <Navigate to="/admin/dashboard" />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="/login" element={<Login />} />{" "}
      <Route
        path="/admin"
        element={
          <AdminProtect>
            <AdminLayout />
          </AdminProtect>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route index element={<Dashboard />} />

        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
