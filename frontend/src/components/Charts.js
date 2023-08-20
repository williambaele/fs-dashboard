import React from "react";
import ReactEcharts from "echarts-for-react";

const Charts = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  return (
    <div className=" bg-[#232323] p-4 rounded h-full">
      <h2 className="text-2xl text-gray-300">Your created tasks</h2>
      <ReactEcharts option={option} />
    </div>
  );
};

export default Charts;
