import React, { useState } from "react";
import { Chart } from "react-google-charts";

const Charts = ({userTasks}) => {
  const data = [
    ["Year", "Finished", "Pending"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  console.log(userTasks)
  const options = {
    hAxis: { title: "Year", titleTextStyle: { color: "white" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "70%", height: "70%" },
    series: {
      0: {
        color: "#593efe",
      },
      1: {
        color: "#ac9fff",
      },
    },
    backgroundColor: "",
    legend: {
      titleTextStyle: { color: "#FFFFF" },
      textStyle: { fontSize: 11 },
    },
  };

  const [activePeriod, setActivePeriod] = useState("month");
  return (
    <div className="bg-[#232323] p-4 rounded h-full flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="text-lg text-gray-300 md:text-2xl">Your created tasks</h2>
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
      <div className="h-full">
        <Chart
          chartType="AreaChart"
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
