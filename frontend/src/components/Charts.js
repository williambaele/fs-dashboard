import React from "react";
import ReactECharts from "echarts-for-react";

const Charts = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div className="my-4 bg-[#232323] p-4 rounded h-full space-y-4">
      <h2 className="text-2xl text-gray-300">Your created tasks</h2>
      {/* <ReactECharts lazyUpdate={true} option={options} /> */}
    </div>
  );
};

export default Charts;
