import React from "react";
import StatsCard from "./StatsCard";
import Charts from "./Charts";
import Doughtnut from "./Doughtnut";
import MostActiveUsers from "./MostActiveUsers";
import HelpCard from "./HelpCard";

const Dashboard = ({ user, userTasks, userGroups }) => {
  return (
    // <div className="h-full p-6 bg-[#0b0b0b] gap-10 w-full">
    //   <div className="grid row-span-1 space-y-4">
    //     <p className="text-4xl text-white">Welcome {user.pseudo} 👋🏼</p>
    //     <StatsCard userTasks={userTasks} userGroups={userGroups} />
    //   </div>
    //   <div className="grid row-span-3 gap-4 h-[500px] md:grid-cols-3 w-full py-10">
    //     <div className="md:col-span-2">
    //       <Charts />
    //     </div>
    //     <Doughtnut />
    //   </div>
    //   <div className="grid h-full row-span-2 gap-4 md:grid-cols-3">
    //     <div className="md:col-span-2">
    //       <MostActiveUsers />
    //     </div>
    //     <HelpCard />
    //   </div>
    // </div>
    // <div className="h-full md:h-screen bg-[#0b0b0b] py-10 px-4 space-y-4 md:space-y-10">
    //
    //   <div className="h-[400px]">
    //   </div>
    //   <HelpCard />
    // </div>
    <div className="h-full px-4 py-6 space-y-4  bg-[#0b0b0b] md:h-screen md:space-y-6">
      <div className="flex items-center h-20">
        <h2 className="text-3xl text-white md:text-4xl">
          Welcome {user.pseudo} 👋🏼
        </h2>
      </div>
      <div className="h-full md:h-32">
        <StatsCard userTasks={userTasks} userGroups={userGroups} />
      </div>
      <div className="bg-purple-400 h-96">
        <Charts />
      </div>
      <div className="h-20 bg-orange-400"></div>
    </div>
  );
};

export default Dashboard;
