import React from "react";
import MostActiveUsersRow from "./MostActiveUsersRow";

const MostActiveUsersTable = () => {
  const tableHeadings = [
    {
      name: "Name",
      size: "w-1/4",
    },
    {
      name: "Tasks",
      size: "w-1/4",
    },
    {
      name: "Finished tasks",
      size: "w-1/4",
    },
    {
      name: "Ratio",
      size: "w-1/4",
    },
  ];

  const users = [
    {
      name: "William",
      tasks: 12,
      finishedTasks: 8,
    },
    {
      name: "Louis",
      tasks: 20,
      finishedTasks: 8,
    },
    {
      name: "Laurent",
      tasks: 4,
      finishedTasks: 1,
    },
    {
      name: "Louis",
      tasks: 20,
      finishedTasks: 8,
    },
    {
      name: "William",
      tasks: 12,
      finishedTasks: 8,
    },
  ];
  return (
    <div className="h-full overflow-auto">
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
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          {users.map((user, index) => (
            <MostActiveUsersRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostActiveUsersTable;
