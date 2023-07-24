import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountForm from "../components/AccountForm";
import NewArticleForm from "../components/NewArticleForm";

const Dashboard = () => {
  const { user } = useAuthContext();
  const menu = [
    {
      name: "New article",
      emoji: "📝",
      key: "newArticle",
    },
    {
      name: "Your posts",
      emoji: "📖",
      key: "yourPosts",
    },
    {
      name: "Edit profile",
      emoji: "⚙️",
      key: "editProfile",
    },
  ];

  const [activeMenu, setActiveMenu] = useState("newArticle");

  const handleMenuClick = (key) => {
    setActiveMenu(key);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#F0F0F0] h-screen">
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
            <div className="grid md:grid-cols-12 h-full gap-4">
              <div className="md:col-span-3 md:grid h-fit flex gap-2">
                {menu.map((item) => (
                  <div
                    key={item.key}
                    className={`flex gap-4 px-4 py-2 rounded-xl cursor-pointer h-fit ${
                      activeMenu === item.key ? "bg-gray-100" : ""
                    }`}
                    onClick={() => handleMenuClick(item.key)}
                  >
                    <p className="text-xl">{item.emoji}</p>
                    <p className="text-xl">{item.name}</p>
                  </div>
                ))}
              </div>
              <div className="md:col-span-9">
                {activeMenu === "newArticle" ? (
                  <>
                    <NewArticleForm />
                  </>
                ) : null}
                {activeMenu === "yourPosts" ? (
                  <>
                    <div className="h-full bg-red-900"></div>
                  </>
                ) : null}
                {activeMenu === "editProfile" ? (
                  <>
                    <AccountForm user={user} />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
