import React from "react";

const TaskStatusLabel = ({ status }) => {
  const capitalizedStatus = status.charAt(0).toUpperCase() + status.slice(1);

  let color;
  if (status === "cool") {
    color = "green-500";
  } else if (status === "middle") {
    color = "yellow-500";
  } else if (status === "urgent") {
    color = "red-500";
  } else {
    color = "[#593EFE]";
  }

  return (
    <td class="h-px w-px">
      <div class="px-1 py-2 flex justify-center items-center">
        <span
          class={`w-fit md:w-full px-2 h-full items-center text-center rounded-full text-sm bg-${color} text-gray-100`}
        >
          {capitalizedStatus}
        </span>
      </div>
    </td>
  );
};

export default TaskStatusLabel;
