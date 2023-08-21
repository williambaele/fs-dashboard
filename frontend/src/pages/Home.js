import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users";
import Account from "../components/Account"; 
import Dashboard from "../components/Dashboard"; 
import Tasks from "../components/Tasks"

const Home = ({user, tasks, userTasks}) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  // Map the active menu to its corresponding component
  const menuComponents = {
    dashboard: <Dashboard user={user} tasks={tasks} userTasks={userTasks}/>,
    user: <Users />,
    account: <Account />,
    tasks: <Tasks user={user} userTasks={userTasks}/>
  };

  
  const selectedComponent = menuComponents[activeMenu] || null;

  return (
    <div className="flex w-full">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} user={user} />
      <div className="w-full h-full">{selectedComponent}</div>
    </div>
  );
};

export default Home;
