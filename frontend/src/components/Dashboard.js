import React from "react";
import StatsCard from "./StatsCard";
import Charts from "./Charts";
import HelpCard from "./HelpCard";

const Dashboard = ({ user, userTasks, userGroups }) => {
  return (
    <div className="h-full px-4 py-6 space-y-4  bg-[#0b0b0b] md:h-screen md:space-y-6">
      <div className="flex items-center h-20">
        <h2 className="text-3xl text-white md:text-4xl">
          Welcome {user.pseudo} 👋🏼
        </h2>
      </div>
      <div className="h-full md:h-32">
        <StatsCard userTasks={userTasks} userGroups={userGroups} />
      </div>
      <div className=" h-96">
        <Charts userTasks={userTasks}/>
      </div>
      <div className="h-20 ">
        <HelpCard />
      </div>
    </div>
  );
};

export default Dashboard;
