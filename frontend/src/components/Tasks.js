import React, { useState } from "react";
import TasksTable from "./TasksTable";
import TaskFormModal from "./TaskFormModal";

const Tasks = () => {
  const [isTaskFormVisible, setIsTaskFormVisible] = useState(false);

  const openTaskForm = () => {
    setIsTaskFormVisible(true);
  };

  const closeTaskForm = () => {
    setIsTaskFormVisible(false);
  };

  return (
    <div
      className={`h-screen p-4 bg-[#0b0b0b] relative ${
        isTaskFormVisible === true ? "backdrop-blur-xl" : ""
      }`}
    >
      {isTaskFormVisible && <TaskFormModal onClose={closeTaskForm} isTaskFormVisible={isTaskFormVisible} />}
      <TasksTable onAddTaskClick={openTaskForm} />
    </div>
  );
};

export default Tasks;
