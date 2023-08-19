import React, { useState } from "react";
import { useTasksContext } from "../hooks/useTasksContext";

const TaskFormModal = ({ onClose, isTaskFormVisible, user }) => {
  const [taskLevel, setTaskLevel] = useState("");
  const { dispatch } = useTasksContext();
  const [error, setError] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);
  const [dueDate, setDueDate] = useState("");
  const [startDate, setStartDate] = useState("");

  //TASK CREATION
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Checking if the user is logged in
    if (!user) {
      setError("You must be logged in");
      return;
    }
    //Adding data to the task's creation
    const task = {
      title,
      description,
      taskLevel,
      startDate,
      dueDate,
      user_id: user._id,
    };
    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log("error");
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      dispatch({ type: "CREATE_TASK", payload: json });
      onClose();
    }
  };
  return (
    <div
      className={`fixed inset-0 z-20 flex items-center justify-center ${
        isTaskFormVisible === true ? "backdrop-blur-md	" : ""
      }`}
    >
      <div class="mt-0 sm:max-w-xl sm:w-full m-3 sm:mx-auto">
        <div class="relative flex flex-col shadow-sm rounded-xl overflow-hidden bg-[#0b0b0b] border">
          <div class="absolute top-2 right-2">
            <button
              onClick={() => onClose()}
              type="button"
              class="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-100 hover:text-gray-200 focus:outline-none transition-all"
            >
              <svg
                class="w-3.5 h-3.5"
                width="16"
                height="16"
                viewBox="0 0 8 8"
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <div class="p-4 sm:p-10 overflow-y-auto">
            <div class="mb-6 text-center">
              <h3 class="mb-2 text-xl font-bold text-gray-400 ">New task</h3>
              <p class="text-gray-500">
                Add a new task to your dashbaord seamless
              </p>
            </div>

            <div class="space-y-4">
              <form className="text-gray-400" onSubmit={handleSubmit}>
                <div class="mb-3 sm:mb-4">
                  <label
                    for="hs-feedback-post-comment-name-1"
                    class="block mb-2 text-sm font-medium "
                  >
                    Title
                  </label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    id="hs-feedback-post-comment-name-1"
                    class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm sm:p-4 bg-[#232323] focus:outline-none"
                    placeholder="Title"
                  />
                </div>

                <div class="mb-3 sm:mb-4">
                  <label
                    for="hs-feedback-post-comment-email-1"
                    class="block mb-2 text-sm font-medium "
                  >
                    User
                  </label>
                  <select
                    type="text"
                    id="hs-feedback-post-comment-email-1"
                    class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm sm:p-4 bg-[#232323] focus:outline-none"
                    placeholder="Email address"
                  >
                    <option>William</option>
                    <option>Martin</option>
                    <option>Louis</option>
                  </select>
                </div>
                <div class="mb-3 sm:mb-4">
                  <label
                    for="hs-feedback-post-comment-name-1"
                    class="block mb-2 text-sm font-medium "
                  >
                    Status
                  </label>
                  <div className="grid justify-between grid-cols-3 gap-2">
                    <button
                      type="button"
                      className={`px-8 py-2 text-gray-100 bg-green-600 rounded-md ${
                        taskLevel === "cool" ? "border-2" : ""
                      }`}
                      onClick={() => setTaskLevel("cool")}
                    >
                      Cool
                    </button>
                    <button
                      type="button"
                      className={`px-8 py-2 text-gray-100 bg-yellow-600 rounded-md ${
                        taskLevel === "middle" ? "border-2" : ""
                      }`}
                      onClick={() => setTaskLevel("middle")}
                    >
                      Middle
                    </button>
                    <button
                      type="button"
                      className={`px-8 py-2 text-gray-100 bg-red-600 rounded-md ${
                        taskLevel === "urgent" ? "border-2" : ""
                      }`}
                      onClick={() => setTaskLevel("urgent")}
                    >
                      Urgent
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    for="hs-feedback-post-comment-textarea-1"
                    class="block mb-2 text-sm font-medium "
                  >
                    Description
                  </label>
                  <div class="mt-1">
                    <textarea
                      id="hs-feedback-post-comment-textarea-1"
                      name="hs-feedback-post-comment-textarea-1"
                      rows="3"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm sm:p-4 bg-[#232323] focus:outline-none"
                      placeholder="Leave your description here..."
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div class="mt-1">
                      <label
                        for="hs-feedback-post-comment-textarea-1"
                        class="block mb-2 text-sm font-medium"
                      >
                        Start date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm sm:p-4 bg-[#232323] focus:outline-none"
                      />
                    </div>
                    <div class="mt-1">
                      <label
                        for="hs-feedback-post-comment-textarea-1"
                        class="block mb-2 text-sm font-medium"
                      >
                        Due date
                      </label>
                      <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm sm:p-4 bg-[#232323] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-center items-center py-3 bg-[#0b0b0b]">
                  <button
                    type="submit"
                    class="py-2.5 px-10 inline-flex justify-center items-center gap-2 rounded-md text-gray-100 border border-transparent font-semibold bg-[#593EFE] hover:bg-[#593EFE]/80 focus:outline-none text-sm"
                  >
                    Add task
                  </button>
                </div>
                <div classsName="flex justify-center">
                  {error && (
                    <div className="flex justify-center text-[#593EFE]">
                      {error}
                      <p>
                        {emptyFields.map((item, index) => (
                          <span key={index}>
                            {item}
                            {index !== emptyFields.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskFormModal;
