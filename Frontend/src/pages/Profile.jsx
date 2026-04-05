import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider"; // Make sure the path is correct

const Profile = () => {
  // 1. Consume the context
  const { user, isLoading } = useContext(AuthContext);

  // 2. Handle the loading state (waiting for the API)
  if (isLoading) {
    return <div className="p-8 text-center">Loading profile...</div>;
  }

  // 3. Handle the case where no user is logged in
  if (!user) {
    return (
      <div className="p-8 text-center text-red-500">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <section className="p-8 max-w-2xl mx-auto bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>

      <div className="space-y-4">
        <div className="flex flex-col items-center sm:flex-row sm:items-start border-b pb-6 gap-4">
          <span className="font-semibold w-32 text-gray-600">
            Profile Picture:
          </span>
          <img
            src={`http://localhost:5000/images/${user?.profile}`}
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-sm"
          />
        </div>

        <div className="flex border-b pb-2">
          <span className="font-semibold w-32 text-gray-600">Full Name:</span>
          <span className="text-gray-800">{user.userName}</span>
        </div>

        <div className="flex border-b pb-2">
          <span className="font-semibold w-32 text-gray-600">Email:</span>
          <span className="text-gray-800">{user.email}</span>
        </div>

        <div className="flex border-b pb-2">
          <span className="font-semibold w-32 text-gray-600">Role:</span>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
            {user.role}
          </span>
        </div>
      </div>

      {/* {console.log("Profile Data:", user)} */}
    </section>
  );
};

export default Profile;
