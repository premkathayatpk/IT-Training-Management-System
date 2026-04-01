import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <h1>Profile</h1>
      <h1>{user.userName}</h1>
      <h1>{user.email}</h1>
      <h1>{user.role}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.createdAt}</h1>
      <h1>{user.bio}</h1>
      <img src={user.profile} alt="profile" />
    </div>
  );
};

export default Profile;
