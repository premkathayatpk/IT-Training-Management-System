import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 animate-pulse">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 pb-8 border-b border-gray-200">
        <img
          src={`http://localhost:5000/images/${user.profile}`}
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 p-1"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{user.userName}</h1>
          <p className="text-blue-600 font-medium uppercase tracking-wider text-sm">
            {user.role}
          </p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailItem label="Email Address" value={user.email} />
        <DetailItem label="Phone Number" value={user.phone} />
        <DetailItem
          label="Member Since"
          value={new Date(user.createdAt).toLocaleDateString()}
        />
        <DetailItem
          label="Account Status"
          value="Active"
          color="text-green-600"
        />
      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Edit Profile
        </button>
        <button className="px-6 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition">
          Settings
        </button>
      </div>
    </div>
  );
};

/**
 * Reusable component for detail rows to keep code DRY
 */
const DetailItem = ({ label, value, color = "text-gray-900" }) => (
  <div className="flex flex-col p-3 bg-gray-50 rounded-lg">
    <span className="text-xs font-semibold text-gray-500 uppercase">
      {label}
    </span>
    <span className={`text-lg font-medium ${color}`}>{value || "N/A"}</span>
  </div>
);

export default Profile;
