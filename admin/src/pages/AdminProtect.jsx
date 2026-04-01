import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminProtect = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
// console.log(user.role)
  if (isLoading) {
    <h1>Loading........</h1>;
  }
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AdminProtect;
