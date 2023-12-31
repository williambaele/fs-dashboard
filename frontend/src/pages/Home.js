import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Groups from "../components/Groups";
import Account from "../components/Account";
import Dashboard from "../components/Dashboard";
import Tasks from "../components/Tasks";

const Home = ({ user, tasks, userTasks, userGroups, allUsers, groupTasks }) => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuComponents = {
    dashboard: <Dashboard user={user} tasks={tasks} userTasks={userTasks} userGroups={userGroups} />,
    group: <Groups user={user} userGroups={userGroups} allUsers={allUsers} groupTasks={groupTasks}/>,
    account: <Account user={user}/>,
    tasks: <Tasks user={user} userTasks={userTasks} />,
  };

  const selectedComponent = menuComponents[activeMenu] || null;

  return (
    <div className="flex flex-wrap w-full md:flex-nowrap">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        user={user}
      />
      <div className="w-full h-full">{selectedComponent}</div>
    </div>
  );
};

export default Home;
