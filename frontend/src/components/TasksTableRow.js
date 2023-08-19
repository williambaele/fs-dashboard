import React from "react";
import TaskStatusLabel from "./TaskStatusLabel";
import TaskRowEditActions from "./TaskRowEditActions";

const TasksTableRow = ({
  task,
  initial,
  animate,
  exit,
  isDropdownOpen,
  onOpenDropdown,
  onCloseDropdown,
}) => {
  const createdAtDate = new Date(task.createdAt);
  const formattedDate = createdAtDate.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <tr>
      <td class="h-px w-px whitespace-nowrap">
        <div class="pl-6 pr-6 py-3">
          <div class="flex items-center gap-x-3">
            <div class="grow">
              <span class="block text-sm font-semibold text-gray-500">
                {task.title}
              </span>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px w-40 whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="block text-sm text-gray-500">{task.description}</span>
        </div>
      </td>
      <td class="h-px w-20 whitespace-nowrap">
        <div class="px-6 py-3">
          <img
            class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
            src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Imdage ddzp as"
          />
        </div>
      </td>
      <TaskStatusLabel status={task.taskLevel} />
      <td class="h-px w-32 whitespace-nowrap">
        <div class="px-6 py-3">
          <div class="flex items-center gap-x-3">
            <span class="text-xs text-gray-500">3/5</span>
            <div class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="flex flex-col justify-center overflow-hidden"
                role="progressbar"
                aria-valuenow="20"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </td>
      <td class="h-px w-px whitespace-nowrap">
        <div class="px-6 py-3">
          <span class="text-sm text-gray-500">{formattedDate}</span>
        </div>
      </td>
      <TaskRowEditActions
        isDropdownOpen={isDropdownOpen}
        onOpenDropdown={onOpenDropdown}
        onCloseDropdown={onCloseDropdown}
      />{" "}
    </tr>
  );
};

export default TasksTableRow;
