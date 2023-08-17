import React from "react";

const TasksTableRow = () => {
  return (
    <tr>
      <td class="h-px w-px whitespace-nowrap">
        <div class="pl-6 pr-6 py-3">
          <div class="flex items-center gap-x-3">
            <div class="grow">
              <span class="block text-sm font-semibold text-gray-800">
                David Harrison
              </span>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px w-48 whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="block text-sm font-semibold text-gray-500">
            Seller has to introduce himself and
          </span>
        </div>
      </td>
      <td class="h-px w-20 whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="block text-sm font-semibold text-gray-800">
            Seller
          </span>
          <span class="block text-sm text-gray-500">Branding products</span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <svg
              class="w-2.5 h-2.5"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Warning
          </span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <div class="flex items-center gap-x-3">
            <span class="text-xs text-gray-500">3/5</span>
            <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
              <div
                class="flex flex-col justify-center overflow-hidden bg-gray-800 dark:bg-gray-200"
                role="progressbar"
                aria-valuenow="78"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-500">20 Dec, 09:27</span>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-1.5">
          <a
            class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium"
            href="/"
          >
            Edit
          </a>
        </div>
      </td>
    </tr>
  );
};

export default TasksTableRow;
