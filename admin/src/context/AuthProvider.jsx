import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getMe = async () => {
    try {
      setIsLoading(true);

      const res = await axios.get("http://localhost:5000/api/user/getUser");

      if (res.status === 200) {
        setUser(res.data.user);
      }
    } catch (err) {
      setUser(null);
      if (err.response?.status !== 401) {
        console.error("Actual Server Error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMe();
  }, []);

  
  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, isError }}>
      {children}
    </AuthContext.Provider>
  );
};
