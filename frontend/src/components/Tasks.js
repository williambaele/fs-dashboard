import React from "react";
import TasksTable from "./TasksTable";

const Tasks = () => {
  return (
    <div className="w-full h-full p-4 bg-orange-100">
      <div className="grid p-4">
        <TasksTable />
      </div>
    </div>
  );
};

export default Tasks;
