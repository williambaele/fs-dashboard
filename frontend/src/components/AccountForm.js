import React, { useState } from "react";
import { useUpdateAccount } from "../hooks/useUpdateAccount";

const AccountForm = ({ user }) => {
  const [newPseudo, setNewPseudo] = useState("");
  const { updateAccount, error, isLoading } = useUpdateAccount({ user });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateAccount(newPseudo);
    setNewPseudo("");
  };

  return (
    <div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={user.pseudo}
          value={newPseudo}
          onChange={(e) => setNewPseudo(e.target.value)}
          autoComplete="given-name"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        />
        <input
          id="email"
          name="email"
          type="email"
          value={user.email}
          autocomplete="email"
          className="bg-white shadow-xs p-4 rounded-xl border border-gray-200 outline-none"
        />

        {/* <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    for="photo"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Photo
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="flex items-center">
                      <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          class="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Change
                      </button>
                    </div>
                  </div>
                </div> */}

        <div class="pt-5">
          <div class="flex justify-end">
            <button
              type="button"
              onClick={(e) => setNewPseudo("")}
              className={
                newPseudo === ""
                  ? "hidden"
                  : "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2"
              }
            >
              Cancel
            </button>
            <button
              className={
                newPseudo === ""
                  ? "hidden"
                  : "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2"
              }
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
