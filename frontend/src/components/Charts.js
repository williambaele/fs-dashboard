import React from "react";
import { Chart } from "react-google-charts";

const Charts = () => {
  return (
    <div className=" bg-[#232323] p-4 rounded h-full">
      <h2 className="text-2xl text-gray-300">Your created tasks</h2>
      <Chart
        chartType="ScatterChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [8, 12],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  );
};

export default Charts;
