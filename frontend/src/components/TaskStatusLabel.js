import React from "react";

const TaskStatusLabel = ({ status }) => {
  const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  let color;
  if (status === "cool") {
    color = "green";
  } else if (status === "middle") {
    color = "yellow";
  } else {
    color = "red";
  }

  return (
    <td class="h-px w-px whitespace-nowrap">
      <div class="px-6 py-3">
        <span class={`inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-${color}-500 text-${color}-800`}>
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
          {capitalizedStatus}
        </span>
      </div>
    </td>
  );
};

export default TaskStatusLabel;
