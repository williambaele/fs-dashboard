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
