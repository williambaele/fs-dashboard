import React, { useState } from "react";
import TaskStatusLabel from "./TaskStatusLabel";
import { useGroupTasksContext } from "../hooks/useGroupTasksContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GroupTaskFormModalEdit from "./GroupTaskFormModalEdit";
const TasksTableGroupRow = ({
  groupTask,
  user,
  isDropdownOpen,
  onOpenDropdown,
  onCloseDropdown,
}) => {
  //REMAINING TIME
  const currentDateTime = new Date();
  const dueDateTime = new Date(groupTask.dueDate);
  const remainingTime = dueDateTime - currentDateTime;
  const startDate = new Date(groupTask.startDate);
  const totalTime = dueDateTime - startDate;
  let progressPercentage;
  if (startDate > currentDateTime) {
    progressPercentage = 4;
  } else {
    progressPercentage = ((totalTime - remainingTime) / totalTime) * 100;
  }

  //DROPDOWN VISIBILITY
  const handleToggleVisibility = () => {
    if (isDropdownOpen) {
      onCloseDropdown();
    } else {
      onOpenDropdown();
    }
  };

  const [isEditModalVisible, setIsEditModalVisible] = useState(false); // State for the edit modal

  //DUE DATE FORMAT
  const dueDate = new Date(groupTask.dueDate);
  const formattedDueDate = dueDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  //DELETE TASK
  const { dispatch } = useGroupTasksContext();
  const handleDeleteTask = async (taskId) => {
    if (!user) {
      console.log("You must be logged in");
      return;
    }
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    if (response.ok) {
      dispatch({ type: "DELETE_TASK", payload: { _id: taskId } });
      onCloseDropdown();
      toast("Task deleted");
    } else {
      console.log("Error deleting the task.");
    }
  };

  //MARK TASK AS DONE
  const markTaskAsDone = async (taskId) => {
    if (!user) {
      console.log("You must be logged in");
      return;
    }
    const updatedTask = { ...groupTask, taskLevel: "finished" };
    const response = await fetch(`/api/grouptasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(updatedTask),
    });

    if (response.ok) {
      dispatch({ type: "UPDATE_GROUPTASK", payload: updatedTask });
      onCloseDropdown();
      toast("Task marked as done");
    } else {
      console.log("Error marking the task as done.");
    }
  };
  return (
    <tr>
      <td class="h-px whitespace-nowrap w-1/6">
        <div class="pl-6 pr-6 py-3 overflow-hidden">
          <div class="flex items-center gap-x-3">
            <div class="grow">
              <span class="block text-sm font-bold text-gray-400 overflow-hidden">
                {groupTask.title}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px whitespace-nowrap w-1/6">
        <div class="px-6 py-3 overflow-hidden">
          <span class="block text-sm text-gray-500">
            {groupTask.description}
          </span>
        </div>
      </td>
      <TaskStatusLabel status={groupTask.taskLevel} />
      <td class="h-px w-1/6 whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-500">{formattedDueDate}</span>
        </div>
      </td>
      <td className="w-1/6 whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex items-center bg-gray-200 rounded-md gap-x-3">
            <div
              style={{
                width: `${progressPercentage}%`,
                backgroundColor: "#593EFE",
              }}
              className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full"
            >
              <div
                className="flex flex-col justify-center"
                role="progressbar"
                aria-valuenow={progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td className="w-1/6">
        <div className="px-6 py-1.5 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#593EFE"
            className="cursor-pointer bi bi-three-dots"
            viewBox="0 0 16 16"
            onClick={handleToggleVisibility}
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          {isDropdownOpen && (
            <div className="absolute top-0 right-20 z-10 mt-2 bg-[#171717] border rounded-lg shadow-lg text-gray-100 text-sm">
              <button
                className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-[#232323] hover:rounded-t-md"
                onClick={() => setIsEditModalVisible(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
                <p>Edit</p>
              </button>
              <button
                className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-[#232323]"
                onClick={() => markTaskAsDone(groupTask._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-all"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
                </svg>
                <p>Done</p>
              </button>
              <button
                className="flex items-center w-full gap-4 px-4 py-2 text-left hover:bg-[#232323] hover:rounded-b-md hover:text-red-400"
                onClick={() => handleDeleteTask(groupTask._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash "
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
                <p>Delete</p>
              </button>
            </div>
          )}
        </div>
      </td>
      {isEditModalVisible && (
        <GroupTaskFormModalEdit
          onClose={() => setIsEditModalVisible(false)} // Close the edit modal
          isTaskFormVisible={isEditModalVisible}
          user={user}
          groupTask={groupTask} // Pass the task data to the modal
        />
      )}
    </tr>
  );
};

export default TasksTableGroupRow;
