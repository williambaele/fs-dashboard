import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import Account from "../components/Account"; 
import Dashboard from "../components/Dashboard"; 
import Tasks from "../components/Tasks"

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Map the active menu to its corresponding component
  const menuComponents = {
    dashboard: <Dashboard />,
    user: <Users />,
    account: <Account />,
    tasks: <Tasks/>
  };

  
  const selectedComponent = menuComponents[activeMenu] || null;

  return (
    <div className="flex w-full">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="w-full h-full">{selectedComponent}</div>
    </div>
  );
};

export default Home;
