import React, { useState } from "react";
import TasksTableGroup from "./TasksTableGroup";
import GroupForm from "./GroupForm";
import GroupFormEdit from "./GroupFormEdit";

const Groups = ({ user, userGroups, allUsers }) => {
  const [isGroupFormVisible, setIsGroupFormVisible] = useState(false);
  const [isGroupFormEditVisible, setIsGroupFormEditVisible] = useState(false);

  // Set the first group by default or null if no user's group
  let firstUserGroup = userGroups && userGroups.length > 0 ? userGroups[0].name : "";
  const [selectFilter, setSelectFilter] = useState(firstUserGroup);
  const handleSelectFilterChange = (event) => {
    setSelectFilter(event.target.value);
  };

  // Find the selected group based on selectFilter value
  const selectedGroup = userGroups.find((group) => group.name === selectFilter);

  return (
    <div
      className={`h-screen p-6 bg-[#0b0b0b] gap-10 w-full  ${
        isGroupFormVisible || isGroupFormEditVisible === true ? "	" : "space-y-6"
      }`}
    >
      <div className="flex justify-between">
        <h2 className="text-xl text-gray-100 md:text-3xl">Your groups</h2>
        <div className="flex gap-4">
          <div
            onClick={() => setIsGroupFormEditVisible(true)}
            class="cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-[#232323] text-gray-300 hover:bg-[#232323]/80 focus:outline-none transition-all text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </svg>
          </div>
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
          allUsers={allUsers}
        />
      )}
      {isGroupFormEditVisible && (
        <GroupFormEdit
          onClose={() => setIsGroupFormEditVisible(false)}
          isTaskFormVisible={isGroupFormEditVisible}
          user={user}
          allUsers={allUsers}
          selectedGroup={selectedGroup} 
        />
      )}
      <TasksTableGroup />
    </div>
  );
};

export default Groups;
