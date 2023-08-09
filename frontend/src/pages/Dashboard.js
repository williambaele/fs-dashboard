import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountForm from "../components/AccountForm";
import NewArticleForm from "../components/NewArticleForm";
import UserPostsDashboard from "../components/UserPostsDashboard";

const Dashboard = ({ articles }) => {
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
    <div className="flex flex-col h-screen">
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <Navbar />
        <div className="bg-[#F0F0F0] h-screen">
          <div className="container px-4 py-10 mx-auto md:px-0">
            <div className="p-8 bg-white rounded-2xl">
              <div className="py-4 space-y-4">
                <h1 className="text-5xl font-bold text-center text-gray-900">
                  Dashboard
                </h1>
                <p className="text-lg text-center text-gray-400">
                  View your dashboard, manage your posts, subscription and edit
                  and profile.
                </p>
              </div>
              <div className="grid h-full gap-4 md:grid-cols-12">
                <div className="gap-2 md:col-span-3 md:grid h-fit">
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
                <div className="h-full md:col-span-9">
                  {activeMenu === "newArticle" ? (
                    <>
                      <NewArticleForm user={user} />
                    </>
                  ) : null}
                  {activeMenu === "yourPosts" ? (
                    <>
                      <UserPostsDashboard user={user} articles={articles} />
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
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
