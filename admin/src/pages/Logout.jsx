import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Logout = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      let res = await axios("http://localhost:5000/api/user/logout", {
        withCredentials: true,
      });
      if (res.status == 200) {
        setUser(null);
        alert("Logout Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);

      setUser(null);
      navigate("/login");
    }
  };

  useEffect(() => {
    logout();
  }, [setUser, navigate]);

  return <div></div>;
};

export default Logout;
