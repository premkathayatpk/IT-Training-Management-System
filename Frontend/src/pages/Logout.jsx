import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const performLogout = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/logout", {
          withCredentials: true, // Crucial if you are using cookies/sessions
        });

        if (res.status === 200) {
          setUser(null);
          navigate("/login");
        }
      } catch (err) {
        console.error("Logout failed:", err);
        // Even if the server fails, we often want to clear local state
        // and redirect anyway to keep the UI in sync
        setUser(null);
        navigate("/login");
      }
    };

    performLogout();
  }, [setUser, navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <p className="animate-pulse">Logging you out safely...</p>
    </div>
  );
};

export default Logout;
