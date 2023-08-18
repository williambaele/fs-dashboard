import React, { useState } from "react";
import TasksTable from "./TasksTable";
import TaskFormModal from "./TaskFormModal";

const Tasks = ({user, tasks}) => {
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
      {isTaskFormVisible && <TaskFormModal onClose={closeTaskForm} isTaskFormVisible={isTaskFormVisible} user={user} />}
      <TasksTable onAddTaskClick={openTaskForm} user={user} tasks={tasks}/>
    </div>
  );
};

export default Tasks;
