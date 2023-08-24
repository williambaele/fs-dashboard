import React, { useState } from "react";

const TasksTableGroup = ({selectedGroup}) => {
  const tableHeadings = [
    {
      name: "Title",
      size: "w-40  md:w-3/12",
    },
    {
      name: "Description",
      size: "w-60 md:w-4/12",
    },
    {
      name: "Status",
      size: "w-20 md:w-1/12",
    },
    {
      name: "Due date",
      size: "w-32 md:w-1/12",
    },
    {
      name: "Remaining time",
      size: "w-32 md:w-2/12",
    },
  ];
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const handleOpenDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleCloseDropdown = () => {
    setOpenDropdownIndex(null);
  };

  //SEARCH FILTER
  const [searchValue, setSearchValue] = useState("");

  //SELECT FILTER
  const [selectFilter, setSelectFilter] = useState("all");
  const handleSelectFilterChange = (event) => {
    setSelectFilter(event.target.value);
  };


  return (
    <div className="flex">
      <div class="min-w-full inline-block align-middle overflow-x-auto">
        <div class="bg-[#232323] rounded-xl shadow-sm overflow-hidden">
          <div class="px-6 py-4 gap-3 grid md:flex justify-between md:items-center border-b border-gray-200 ">
            <div>
              <h2 class="text-xl font-semibold text-gray-100">{selectedGroup.name}'s tasks</h2>
              <p class="text-sm text-gray-600">
                Add users, task, edit and more.
              </p>
            </div>
            <div>
              <div class="flex justify-between gap-2 md:gap-6">
                <input
                  placeholder="Search a task"
                  class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#171717] text-gray-400 hover:bg-[#171717]/80 focus:outline-none transition-all text-sm"
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                ></input>
                <select
                  onChange={handleSelectFilterChange}
                  value={selectFilter}
                  className="cursor-pointer py-2 px-3 gap-2 rounded-md font-semibold bg-[#171717] text-gray-400 hover:bg-[#171717]/80 focus:outline-none transition-all text-sm"
                >
                  <option value={"all"}>All</option>
                  <option value={"urgent"}>Urgent</option>
                  <option value={"middle"}>Middle</option>
                  <option value={"cool"}>Cool</option>
                  <option value={"finished"}>Finished</option>
                </select>
                <div
                  class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#49FBB5] text-gray-800 hover:bg-[#49FBB5]/80 focus:outline-none transition-all text-sm"
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
                  <p className="hidden lg:block">Add task</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto max-h-[calc(100vh-200px)]">
            <table class="w-full divide-y divide-gray-200 table-fixed">
              <thead class="bg-[#171717] sticky top-0 z-2">
                <tr>
                  {tableHeadings.map((heading) => (
                    <th
                      scope="col"
                      className={`${heading.size} py-3 pl-6 overflow-hidden text-left`}
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold tracking-wide text-gray-100 uppercase">
                          {heading.name}
                        </span>
                      </div>
                    </th>
                  ))}
                  <th
                    scope="col"
                    className="w-20 px-6 py-3 text-center md:w-1/12"
                  ></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {/* {userTasks
                  .filter((task) =>
                    task.title.toLowerCase().includes(searchValue.toLowerCase())
                  )
                  .filter((task) =>
                    selectFilter === "all"
                      ? true
                      : task.taskLevel === selectFilter
                  )
                  .map((task, index) => (
                    <TasksTableGroupRow
                      key={task.id}
                      task={task}
                      isDropdownOpen={index === openDropdownIndex}
                      onOpenDropdown={() => handleOpenDropdown(index)}
                      onCloseDropdown={handleCloseDropdown}
                    />
                  ))} */}
              </tbody>
            </table>
          </div>

          <div class="px-6 py-4 gap-3 flex justify-between md:items-center border-t border-gray-200 ">
            <div>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">
                  {/* {userTasks.length} results */}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TasksTableGroup;
