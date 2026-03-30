import React, { useState } from "react";

const Register = () => {
  const [role, setRole] = useState("student");
  const [formData,setFormData]=useState({
    name:"",email:"",phone:"",password:"",role:"student",
    bio:"", 
  })

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <main className="w-full max-w-sm bg-white rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Register</h1>
          <p className="text-gray-500 text-sm">Create your account</p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-gray-200 rounded-md p-1 mb-6">
          <button
            type="button"
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
              role === "student"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-600"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole("instructor")}
            className={`w-1/2 py-2 text-sm font-medium rounded-md transition ${
              role === "instructor"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-600"
            }`}
          >
            Instructor
          </button>
        </div>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Profile Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+977 98XXXXXXXX"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Instructor Bio (Only for Instructor) */}
          {role === "instructor" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructor Bio
              </label>
              <textarea
                rows="3"
                placeholder="Tell us about your experience..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              ></textarea>
            </div>
          )}

          {/* Hidden Role Field */}
          <input type="hidden" value={role} name="role" />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up as {role === "student" ? "Student" : "Instructor"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?
          <a
            href="/login"
            className="ml-1 text-blue-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </main>
    </section>
  );
};

export default Register;
