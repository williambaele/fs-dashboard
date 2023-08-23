import React, { useState } from "react";
import TasksTableGroup from "./TasksTableGroup";
import GroupForm from "./GroupForm";

const Groups = ({ user, userGroups }) => {
  const [isGroupFormVisible, setIsGroupFormVisible] = useState(false);
  console.log(userGroups);

  //SELECT FILTER
  //Group 1 selected by default
  const [selectFilter, setSelectFilter] = useState(userGroups[0].name);
  const handleSelectFilterChange = (event) => {
    setSelectFilter(event.target.value);
  };
  return (
    <div
      className={`h-screen p-6 bg-[#0b0b0b] gap-10 w-full  ${
        isGroupFormVisible === true ? "	" : "space-y-6"
      }`}
    >
      <div className="flex justify-between">
        <h2 className="text-3xl text-gray-100">Your groups</h2>
        <div className="flex gap-4">
          <select
            onChange={handleSelectFilterChange}
            value={selectFilter}
            className="cursor-pointer py-2 px-3 rounded-md font-semibold bg-[#232323] text-gray-300 hover:bg-[#232323]/80 focus:outline-none transition-all text-sm"
          >
            {userGroups.map((group) => (
              <option value={group.a}>{group.name}</option>
            ))}
          </select>
          <div
            onClick={() => setIsGroupFormVisible(true)}
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
            <button className="hidden lg:block">Add group</button>
          </div>
        </div>
      </div>
      {isGroupFormVisible && (
        <GroupForm
          onClose={() => setIsGroupFormVisible(false)}
          isTaskFormVisible={isGroupFormVisible}
          user={user}
        />
      )}
      <TasksTableGroup />
    </div>
  );
};

export default Groups;
