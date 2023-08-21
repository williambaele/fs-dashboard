import React, { useState } from "react";
import { Chart } from "react-google-charts";

const Charts = () => {
  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];

  const options = {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017",
    },
  };

  const [activePeriod, setActivePeriod] = useState("month");
  return (
    <div className="bg-[#232323] p-4 rounded h-full flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-300">Your created tasks</h2>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold  focus:outline-none transition-all text-sm ${
              activePeriod === "month"
                ? "bg-[#593EFE] text-gray-100 hover:bg-[#593EFE]/80"
                : "bg-[#171717] text-gray-100 hover:bg-[#171717]/80"
            }`}
            onClick={() => setActivePeriod("month")}
          >
            Month
          </button>
          <button
            className={`cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold  focus:outline-none transition-all text-sm ${
              activePeriod === "all"
                ? "bg-[#593EFE] text-gray-100 hover:bg-[#593EFE]/80"
                : "bg-[#171717] text-gray-100 hover:bg-[#171717]/80"
            }`}
            onClick={() => setActivePeriod("all")}
          >
            All
          </button>
        </div>
      </div>
      <div className="h-full bg-green-50">
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Charts;
