import React from "react";
import { useItemsContext } from "../hooks/useItemsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { dispatch } = useItemsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/items/" + item._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: json });
    }
  };
  return (
    <div>
      <Link to={`/item/${item._id}`}>
        <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-orange-300">
          <img
            alt="Home"
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full rounded-md object-cover"
          />

          <div class="mt-2">
            <div>
              <div>
                <h2 class="text-sm text-gray-500">{item.title}</h2>
              </div>

              <div>
                <p class="font-medium">123 Wallaby Avenue, Park Road</p>
              </div>
            </div>

            <div class="mt-6 flex items-center gap-8 text-xs">
              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">{item._id}</p>

                  <p class="font-medium">2 spaces</p>
                </div>
                <span
                  className="material-symbols-outlined"
                  onClick={handleClick}
                >
                  delete
                </span>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bathroom</p>

                  <p class="font-medium">2 rooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
