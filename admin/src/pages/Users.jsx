import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllUser = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("http://localhost:5000/api/user/getAllUser");
      if (res.status === 200) {
        setUsers(res.data.users || []);
      }
    } catch (err) {
      setUsers([]); // Reset to empty array on error to prevent .map crashes
      if (err.response?.status !== 401) {
        console.error("Server Error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        {/* Table Header Section */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <h2 className="text-xl font-bold text-gray-800">User Management</h2>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            {users?.length || 0} Total Users
          </span>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-500 font-medium">Fetching users...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 uppercase text-xs font-bold tracking-wider">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Joined Date</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.length > 0 ? (
                  users.map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      {/* User Identity */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100"
                            src={
                              item?.profile
                                ? `http://localhost:5000/images/${item.profile}`
                                : `https://ui-avatars.com/api/?name=${item.userName}&background=random`
                            }
                            alt="profile"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/40";
                            }}
                          />
                          <div>
                            <div className="text-sm font-bold text-gray-900">
                              {item.userName}
                            </div>
                            <div className="text-xs text-gray-500">
                              ID: {item._id.slice(-6)}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Contact Info */}
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-700">
                          {item.email}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.phone || "No Phone"}
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="px-6 py-4">
                        <span
                          className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-tighter ${
                            item.role === "admin"
                              ? "bg-purple-100 text-purple-700 border border-purple-200"
                              : "bg-green-100 text-green-700 border border-green-200"
                          }`}
                        >
                          {item.role}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString("en-GB")
                          : "N/A"}
                      </td>

                      {/* Action Buttons */}
                      <td className="px-6 py-4">
                        <button className="text-blue-600 hover:text-blue-900 font-medium text-sm mr-3">
                          Edit
                        </button>
                        <button className="text-red-500 hover:text-red-700 font-medium text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-10 text-center text-gray-400 italic"
                    >
                      No users found in database.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
