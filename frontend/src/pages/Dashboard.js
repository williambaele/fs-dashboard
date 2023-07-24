import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountForm from "../components/AccountForm";

const Dashboard = () => {
  const { user } = useAuthContext();
  console.log({ user });

  return (
    <>
      <Navbar />
      <div className="bg-[#F0F0F0] h-full">
        <div className="mx-auto container px-4 md:px-0 py-10">
          <div className="bg-white p-8 rounded-2xl">
            <div className="space-y-4 py-4">
              <h1 className="text-5xl font-bold text-gray-900 text-center">
                Dashboard
              </h1>
              <p className="text-gray-400 text-lg text-center">
                View your dashboard, manage your posts, subscription and edit
                and profile.
              </p>
            </div>
            <div className="grid md:grid-cols-12 h-screen">
              <div className="md:col-span-3 bg-red-300"></div>
              <div className="md:col-span-9 bg-purple-300"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
