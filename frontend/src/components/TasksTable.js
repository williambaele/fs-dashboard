import React from "react";
import TasksTableRow from "./TasksTableRow";

const TasksTable = () => {
  const tableHeadings = ["Title", "Description", "Users", "Status", "Progress"];
  return (
    <div className="flex">
      <div class="p-1.5 min-w-full inline-block align-middle overflow-x-auto">
        <div class="bg-[#232323] rounded-xl shadow-sm overflow-hidden">
          <div class="px-6 py-4 gap-3 flex justify-between md:items-center border-b border-gray-200 ">
            <div>
              <h2 class="text-xl font-semibold text-gray-100">
                Tasks
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Add users, edit and more.
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <a
                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#49FBB5] text-white hover:bg-[#49FBB5]/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  href="/"
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
                </a>
              </div>
            </div>
          </div>
          <div className="overflow-auto">
            <table class="min-w-full divide-y divide-gray-200 md:table-fixed ">
              <thead class="bg-[#171717]">
                <tr>
                  {tableHeadings.map((heading) => (
                    <th scope="col" class="pl-6 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-100">
                          {heading}
                        </span>
                      </div>
                    </th>
                  ))}

                  <th scope="col" class="px-6 py-3 text-left">
                    <div class="flex items-center gap-x-2">
                      <span class="text-xs font-semibold uppercase tracking-wide text-gray-100">
                        Created
                      </span>
                    </div>
                  </th>

                  <th scope="col" class="px-6 py-3 text-right"></th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <TasksTableRow />
              </tbody>
            </table>
          </div>

          <div class="px-6 py-4 gap-3 flex justify-between md:items-center border-t border-gray-200 ">
            <div>
              <p class="text-sm text-gray-500 ">
                <span class="font-semibold">
                  6
                </span>{" "}
                results
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <button
                  type="button"
                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800  dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  <svg
                    class="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                  Prev
                </button>

                <button
                  type="button"
                  class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800  dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  Next
                  <svg
                    class="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
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
