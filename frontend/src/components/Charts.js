import React from "react";
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
  return (
    <div className="bg-[#232323] p-4 rounded h-full flex flex-col gap-6">
      <div className="flex justify-between">
        <h2 className="text-2xl text-gray-300">Your created tasks</h2>
        <div className="flex gap-4">
          <div class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#49FBB5] text-gray-800 hover:bg-[#49FBB5]/80 focus:outline-none transition-all text-sm">
            <svg
              class="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            Add task
          </div>
        </div>
      </div>
      <div className="h-full bg-green-50"></div>
      {/* <Chart
        chartType="Bar"
        width="100%"
        height="100%"
        data={data}
        options={options}
      /> */}
    </div>
  );
};

export default Charts;
