import React from "react";
import StatsCard from "./StatsCard";
import Charts from "./Charts";
import Doughtnut from "./Doughtnut";

const Dashboard = ({ user, tasks }) => {
  return (
    <div className="h-full md:h-screen p-6 bg-[#0b0b0b]">
      <div>
        <p className="text-4xl text-white">Welcome {user.pseudo} 👋🏼</p>
        <StatsCard tasks={tasks}/>
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2">
            <Charts />
          </div>
          <Doughtnut />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
