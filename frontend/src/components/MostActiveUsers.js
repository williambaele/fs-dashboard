import React from "react";
import MostActiveUsersTable from "./MostActiveUsersTable";

const MostActiveUsers = () => {
  return (
    <div className="bg-[#232323] p-4 rounded h-full space-y-4">
      <h2 className="text-2xl text-gray-300">Most active users</h2>
      <MostActiveUsersTable/>
    </div>
  );
};

export default MostActiveUsers;
