import React from "react";

const TaskRowEditActions = ({
  isDropdownOpen,
  onOpenDropdown,
  onCloseDropdown,
  handleMarkAsDone,
  handleDelete,
}) => {
  const handleToggleVisibility = () => {
    if (isDropdownOpen) {
      onCloseDropdown();
    } else {
      onOpenDropdown();
    }
  };

  return (
    <td className="w-px h-px whitespace-nowrap ">
      <div className="px-6 py-1.5 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#593EFE"
          className="cursor-pointer bi bi-three-dots"
          viewBox="0 0 16 16"
          onClick={handleToggleVisibility}
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        {isDropdownOpen && (
          <div className="absolute top-0 right-14 z-10 mt-2 bg-[#171717] border rounded-lg shadow-lg text-gray-100 text-sm">
            <button
              className="flex items-center gap-3 w-full px-4 py-2 text-left hover:bg-[#232323] hover:rounded-t-md "
              onClick={handleMarkAsDone}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-all"
                viewBox="0 0 16 16"
              >
                <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
              </svg>
              <p>Mark as done</p>
            </button>
            <button
              className="flex items-center w-full gap-4 px-4 py-2 text-left hover:bg-[#232323] hover:rounded-b-md hover:text-red-400"
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash "
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
              </svg>
              <p>Delete</p>
            </button>
          </div>
        )}
      </div>
    </td>
  );
};

export default TaskRowEditActions;

// onClick={() => {
//     deleteItem(item.id);
//   }}
