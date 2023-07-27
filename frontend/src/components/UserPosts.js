import React from "react";
import UserPostCard from "./UserPostCard";

const UserPosts = ({ user }) => {
  console.log(user);
  return (
    <div>
      <UserPostCard />
    </div>
  );
};

export default UserPosts;
