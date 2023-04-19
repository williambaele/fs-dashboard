import React from "react";

const FiltersBar = () => {
  return (
    <div>
      <div class="pt-12 ">
        <aside>
          <h2 className="text-2xl mb-4">Filters</h2>

          <button type="button" class="inline-flex items-center lg:hidden">
            <span class="text-sm font-medium text-gray-700">Filters</span>
            <svg
              class="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div class="hidden lg:block">
            <form class="divide-y divide-gray-200 space-y-10">
              <div>
                <div>
                  <h3 class="block text-sm font-medium text-gray-900">Color</h3>
                  <div class="pt-6 space-y-3">
                    <div class="flex items-center">
                      <input
                        id="color-0"
                        name="color[]"
                        value="white"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label for="color-0" class="ml-3 text-sm text-gray-600">
                        {" "}
                        White{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="color-1"
                        name="color[]"
                        value="beige"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label for="color-1" class="ml-3 text-sm text-gray-600">
                        {" "}
                        Beige{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="color-2"
                        name="color[]"
                        value="blue"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label for="color-2" class="ml-3 text-sm text-gray-600">
                        {" "}
                        Blue{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="color-3"
                        name="color[]"
                        value="brown"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label for="color-3" class="ml-3 text-sm text-gray-600">
                        {" "}
                        Brown{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="color-4"
                        name="color[]"
                        value="green"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label for="color-4" class="ml-3 text-sm text-gray-600">
                        {" "}
                        Green{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="color-5"
                        name="color[]"
                        value="purple"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label for="color-5" class="ml-3 text-sm text-gray-600">
                        {" "}
                        Purple{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-10">
                <div>
                  <legend class="block text-sm font-medium text-gray-900">
                    Category
                  </legend>
                  <div class="pt-6 space-y-3">
                    <div class="flex items-center">
                      <input
                        id="category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="category-0"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {" "}
                        All New Arrivals{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="category-1"
                        name="category[]"
                        value="tees"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="category-1"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {" "}
                        Tees{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="category-2"
                        name="category[]"
                        value="crewnecks"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="category-2"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {" "}
                        Crewnecks{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="category-3"
                        name="category[]"
                        value="sweatshirts"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="category-3"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {" "}
                        Sweatshirts{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="category-4"
                        name="category[]"
                        value="pants-shorts"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="category-4"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {" "}
                        Pants &amp; Shorts{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pt-10">
                <fieldset>
                  <legend class="block text-sm font-medium text-gray-900">
                    Sizes
                  </legend>
                  <div class="pt-6 space-y-3">
                    <div class="flex items-center">
                      <input
                        id="sizes-0"
                        name="sizes[]"
                        value="xs"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600  "
                      />
                      <label for="sizes-0" class="ml-3 text-sm text-gray-600">
                        {" "}
                        XS{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="sizes-1"
                        name="sizes[]"
                        value="s"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600  "
                      />
                      <label for="sizes-1" class="ml-3 text-sm text-gray-600">
                        {" "}
                        S{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="sizes-2"
                        name="sizes[]"
                        value="m"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600  "
                      />
                      <label for="sizes-2" class="ml-3 text-sm text-gray-600">
                        {" "}
                        M{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="sizes-3"
                        name="sizes[]"
                        value="l"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600  "
                      />
                      <label for="sizes-3" class="ml-3 text-sm text-gray-600">
                        {" "}
                        L{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="sizes-4"
                        name="sizes[]"
                        value="xl"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600  "
                      />
                      <label for="sizes-4" class="ml-3 text-sm text-gray-600">
                        {" "}
                        XL{" "}
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        id="sizes-5"
                        name="sizes[]"
                        value="2xl"
                        type="checkbox"
                        class="h-4 w-4 border-gray-300 rounded text-indigo-600  "
                      />
                      <label for="sizes-5" class="ml-3 text-sm text-gray-600">
                        {" "}
                        2XL{" "}
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FiltersBar;
