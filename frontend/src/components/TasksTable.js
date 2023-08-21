import React, { useState } from "react";
import TasksTableRow from "./TasksTableRow";

const TasksTable = ({ onAddTaskClick, userTasks, user }) => {
  const tableHeadings = [
    {
      name: "Title",
      size: "w-2/12"
    },
    {
      name: "Description",
      size: "w-4/12"
    }, 
    {
      name: "Status",
      size: "w-1/12"
    },
    {
      name: "Due date",
      size: "w-1/12"
    },
    {
      name: "Remaining time",
      size: "w-2/12"
    }
  ];
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const handleOpenDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleCloseDropdown = () => {
    setOpenDropdownIndex(null);
  };

  return (
    <div className="flex">
      <div class="p-1.5 min-w-full inline-block align-middle overflow-x-auto">
        <div class="bg-[#232323] rounded-xl shadow-sm overflow-hidden">
          <div class="px-6 py-4 gap-3 flex justify-between md:items-center border-b border-gray-200 ">
            <div>
              <h2 class="text-xl font-semibold text-gray-100">Tasks</h2>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Add users, edit and more.
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <div
                  class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#49FBB5] text-gray-800 hover:bg-[#49FBB5]/80 focus:outline-none transition-all text-sm"
                  onClick={onAddTaskClick}
                >
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
          </div>
          <div className="overflow-auto max-h-[calc(100vh-200px)]">
            <table class="w-full divide-y divide-gray-200 table-fixed">
              <thead class="bg-[#171717] sticky top-0 z-2">
                <tr>
                  {tableHeadings.map((heading) => (
                    <th scope="col" className={`${heading.size} py-3 pl-6 overflow-hidden text-left`}>
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-100 uppercase">
                          {heading.name}
                        </span>
                      </div>
                    </th>
                  ))}
                  <th scope="col" className="w-1/12 px-6 py-3 text-center"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {userTasks.map((task, index) => (
                  <TasksTableRow
                    key={task.id}
                    user={user}
                    task={task}
                    isDropdownOpen={index === openDropdownIndex}
                    onOpenDropdown={() => handleOpenDropdown(index)}
                    onCloseDropdown={handleCloseDropdown}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div class="px-6 py-4 gap-3 flex justify-between md:items-center border-t border-gray-200 ">
            <div>
              <p class="text-sm text-gray-500 ">
                <span class="font-semibold">{userTasks.length}</span> results
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md bg-[#171717] text-gray-100 shadow-sm align-middle hover:text-red-600 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                  </svg>
                  Delete all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksTable;
