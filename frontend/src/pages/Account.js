import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountForm from "../components/AccountForm";

const Account = () => {
  const { user } = useAuthContext();
  console.log({ user });

  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="mx-auto container px-4 md:px-0">
        <AccountForm user={user}/>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
