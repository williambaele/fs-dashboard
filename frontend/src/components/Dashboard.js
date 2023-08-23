import React from "react";
import StatsCard from "./StatsCard";
import Charts from "./Charts";
import Doughtnut from "./Doughtnut";
import MostActiveUsers from "./MostActiveUsers";
import HelpCard from "./HelpCard";

const Dashboard = ({ user, userTasks, userGroups }) => {
  return (
    <div className="h-full p-6 bg-[#0b0b0b] gap-10 w-full">
      <div className="grid row-span-1 space-y-4">
        <p className="text-4xl text-white">Welcome {user.pseudo} 👋🏼</p>
        <StatsCard userTasks={userTasks} userGroups={userGroups} />
      </div>
      <div className="grid row-span-3 gap-4 h-[500px] md:grid-cols-3 w-full py-10">
        <div className="md:col-span-2">
          <Charts />
        </div>
        <Doughtnut />
      </div>
      <div className="grid h-full row-span-2 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <MostActiveUsers />
        </div>
        <HelpCard />
      </div>
    </div>
  );
};

export default Dashboard;
