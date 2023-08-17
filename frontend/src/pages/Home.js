import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import Account from "../components/Account"; 
import Dashboard from "../components/Dashboard"; 

const Home = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Map the active menu to its corresponding component
  const menuComponents = {
    dashboard: <Dashboard />,
    user: <Users />,
    account: <Account />
  };

  
  const selectedComponent = menuComponents[activeMenu] || null;

  return (
    <div className="flex">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="flex-1">{selectedComponent}</div>
    </div>
  );
};

export default Home;
