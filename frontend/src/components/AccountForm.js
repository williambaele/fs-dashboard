import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AccountForm = ({ user }) => {
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const [pseudo, setPseudo] = useState(user.pseudo);
  const [email, setEmail] = useState(user.email);

  //ACCOUNT EDITING
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const updatedAccount = {
      email,
      pseudo,
    };

    try {
      const response = await fetch(`/api/user/${user._id}`, {
        method: "PATCH",
        body: JSON.stringify(updatedAccount),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        setPseudo(updatedAccount.pseudo);
        setEmail(updatedAccount.email);
        toast("Updated account");
      } else {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="flex w-full">
      <div class="bg-[#232323] rounded-xl shadow p-4 sm:p-7 w-full">
        <div class="gap-2 mb-8">
          <h2 class="text-xl font-semibold text-gray-100">Your profile</h2>
          <p class="text-sm text-gray-600">
            Manage your pseudo and email settings.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
            <div class="sm:col-span-3">
              <label
                for="pseudo"
                class="inline-block text-sm text-gray-200 mt-2.5 "
              >
                Pseudo
              </label>
            </div>
            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input
                  id="pseudo"
                  type="text"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-md outline-none"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="email"
                class="inline-block text-sm text-gray-200 mt-2.5 "
              >
                Email
              </label>
            </div>
            <div class="sm:col-span-9">
              <div class="sm:flex">
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-md outline-none"
                />
              </div>
            </div>
          </div>
          <div class="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm outline-none"
            >
              Cancel
            </button>
            {error}
            {emptyFields}
            <button
              type="submit"
              class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#593EFE] text-white hover:bg-[#593EFE]/80 focus:outline-none transition-all text-sm "
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountForm;
