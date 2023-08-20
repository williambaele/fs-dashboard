import React from "react";

const MostActiveUsersRow = ({ user }) => {

  const ratio = (user.finishedTasks / user.tasks) * 100;
  
  return (
    <tr>
      <td class="h-px whitespace-nowrap w-1/6">
        <div class="pl-6 pr-6 py-3 overflow-hidden">
          <div class="flex items-center gap-x-3">
            <div class="grow">
              <span class="block text-sm font-bold text-gray-400 overflow-hidden">
                {user.name}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px whitespace-nowrap w-1/6">
        <div class="px-6 py-3 overflow-hidden">
          <span class="block text-sm text-gray-500">{user.tasks}</span>
        </div>
      </td>
      <td class="h-px w-1/6 whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-500">{user.finishedTasks}</span>
        </div>
      </td>
      <td className="w-1/6 whitespace-nowrap">
        <div className="px-6 py-3">
          <div className="flex items-center bg-gray-200 rounded-md gap-x-3">
            <div
              style={{
                width: `${ratio}%`,
                backgroundColor: "#593EFE",
              }}
              className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full"
            >
              <div
                className="flex flex-col justify-center"
                role="progressbar"
                aria-valuenow={ratio}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MostActiveUsersRow;
