import React from "react";
import StatsCard from "./StatsCard";
import Charts from "./Charts";
import Doughtnut from "./Doughtnut";
import MostActiveUsers from "./MostActiveUsers";
import HelpCard from "./HelpCard";

const Dashboard = ({ user, tasks }) => {
  return (
    <div className="h-full md:h-screen p-6 bg-[#0b0b0b] overflow-auto">
      <div className="space-y-8">
        <p className="text-4xl text-white">Welcome {user.pseudo} 👋🏼</p>
        <StatsCard tasks={tasks} />
        <div className="grid gap-4 h-[200px] md:h-[360px] md:grid-cols-3">
          <div className="md:col-span-2">
            <Charts />
          </div>
          <Doughtnut />
        </div>
        <div className="grid md:grid-cols-3 gap-4 h-[240px]">
          <div className="md:col-span-2">
            <MostActiveUsers />
          </div>
          <HelpCard/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
