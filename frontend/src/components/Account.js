import React from "react";
import AccountForm from "./AccountForm";
const Account = ({ user }) => {
  return (
    <div className="h-full w-full md:h-screen p-6 bg-[#0b0b0b]">
      <AccountForm user={user} />
    </div>
  );
};

export default Account;
