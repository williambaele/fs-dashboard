import React from "react";
import { Chart } from "react-google-charts";

const Doughtnut = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Done", 11],
    ["Pending", 10],
    ["Urgent", 2],
    ["Middle", 2],
  ];

  const options = {
    is3D: true,
    backgroundColor: "",
    slices: {
      0: { color: "#593EFE" },
      1: { color: "#6a51fe" },
      2: { color: "#7a65fe" },
      3: { color: "#8b78fe" },
      4: { color: "grey" },
    },
  };
  return (
    <div className="bg-[#232323] p-4 rounded h-full flex flex-col gap-6">
      <h2 className="text-2xl text-gray-300">Your tasks</h2>
      <div className="h-full">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default Doughtnut;
