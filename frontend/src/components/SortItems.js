import React from "react";

const SortItems = () => {
  return (
    <div>
      <div class="relative inline-block text-left">
        <div>
          <button
            type="button"
            class="group inline-flex justify-center text-sm font-medium text-gray-500 hover:text-gray-900"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Sort
            <svg
              class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          class="hidden origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <p
              class="font-medium text-gray-900 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              {" "}
              Most Popular{" "}
            </p>

            <p
              class="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              {" "}
              Best Rating{" "}
            </p>

            <p
              class="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              {" "}
              Newest{" "}
            </p>

            <p
              class="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-3"
            >
              {" "}
              Price: Low to High{" "}
            </p>

            <p
              class="text-gray-500 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              id="menu-item-4"
            >
              {" "}
              Price: High to Low{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortItems;
