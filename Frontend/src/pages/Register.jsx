import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("student");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const validate = () => {
    let newErrors = {};

    if (!userName.trim()) newErrors.userName = "Full name is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Valid email is required";

    if (!phone || phone.length < 10)
      newErrors.phone = "Valid phone number is required";

    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (password !== conformPassword) {
      newErrors.conformPassword = "Passwords do not match";
    }

    if (!profile) newErrors.profile = "Profile image is required";

    if (role === "instructor" && !bio.trim()) {
      newErrors.bio = "Instructor bio is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("bio", bio);
      formData.append("profile", profile);

      //  API Call
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        formData,
      );

      if (response.status === 200 || response.status === 201) {
        alert("Registration Successful!");
        navigate("/login");
        setUserName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConformPassword("");
        setBio("");
        setProfile(null);
        setErrors({});
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Registration failed";
      console.error("Axios error:", err);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <main className="w-full max-w-sm bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Register</h1>
          <p className="text-gray-500 text-sm">Create your account</p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-gray-200 rounded-md p-1 mb-6">
          {["student", "instructor"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => {
                setRole(r);
                setErrors({});
              }}
              className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
                role === r ? "bg-white text-blue-600 shadow" : "text-gray-600"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.userName ? "border-red-500" : "border-gray-300"}`}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errors.userName && (
              <p className="text-red-500 text-xs mt-1">{errors.userName}</p>
            )}
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              required
              accept="image/*"
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
              onChange={(e) => {
                setProfile(e.target.files[0]);
                setErrors((prev) => ({ ...prev, profile: null }));
              }}
            />
            {errors.profile && (
              <p className="text-red-500 text-xs mt-1">{errors.profile}</p>
            )}
            {profile && (
              <p className="text-green-600 text-xs">Selected: {profile.name}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="+977 98XXXXXXXX"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="name@gmail.com"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Passwords */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? "border-red-500" : "border-gray-300"}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.conformPassword ? "border-red-500" : "border-gray-300"}`}
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
            />
            {errors.conformPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.conformPassword}
              </p>
            )}
          </div>

          {/* Bio */}
          {role === "instructor" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Instructor Bio
              </label>
              <textarea
                rows="3"
                required
                placeholder="Tell us about your experience..."
                className={`w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500 ${errors.bio ? "border-red-500" : "border-gray-300"}`}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              {errors.bio && (
                <p className="text-red-500 text-xs mt-1">{errors.bio}</p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-semibold py-2 rounded-md transition duration-200 ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading
              ? "Processing..."
              : `Sign Up as ${role.charAt(0).toUpperCase() + role.slice(1)}`}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </main>
    </section>
  );
};

export default Register;
