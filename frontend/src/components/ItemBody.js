import React from "react";

const ItemBody = ({ item }) => {
  return (
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div class="flex flex-col-reverse">
            <div class="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
              <div
                class="grid grid-cols-4 gap-6"
                aria-orientation="horizontal"
                role="tablist"
              >
                <button
                  id="tabs-1-tab-1"
                  class="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
                  aria-controls="tabs-1-panel-1"
                  role="tab"
                  type="button"
                >
                  <span class="sr-only"> Angled view </span>
                  <span class="absolute inset-0 rounded-md overflow-hidden">
                    <img
                      src="https://www.sneakers.fr/wp-content/uploads/2018/06/nike-air-max-1-parra-2018-1.jpg"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    class="ring-transparent absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                    aria-hidden="true"
                  ></span>
                </button>
              </div>
            </div>

            <div class="w-full aspect-w-1 aspect-h-1">
              <div
                id="tabs-1-panel-1"
                aria-labelledby="tabs-1-tab-1"
                role="tabpanel"
                tabindex="0"
              >
                <img
                  src="https://www.sneakers.fr/wp-content/uploads/2018/06/nike-air-max-1-parra-2018-1.jpg"
                  alt="Angled front view with bag zipped and handles upright."
                  class="w-full h-full object-center object-cover sm:rounded-lg"
                />
              </div>
            </div>
          </div>

          <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">
              {item.title}
            </h1>

            <div class="mt-3">
              <h2 class="sr-only">Product information</h2>
              <p class="text-3xl text-gray-900">{item.price} €</p>
              <p class="text-3xl text-gray-900">
                User: {item.user_id.slice(0, 10)}
              </p>
            </div>

            <div class="mt-6">
              <h3 class="sr-only">Description</h3>

              <div class="text-base text-gray-700 space-y-6">
                <p>{item.description}</p>
              </div>
            </div>

            <div class="mt-6">
              <div>
                <h3 class="text-sm text-gray-600 mb-2">Color</h3>

                <div class="flex items-center space-x-3">
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-700">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Washed Black"
                      class="sr-only"
                      aria-labelledby="color-choice-0-label"
                    />
                    <p id="color-choice-0-label" class="sr-only">
                      Washed Black
                    </p>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-gray-700 border border-black border-opacity-10 rounded-full"
                    ></span>
                  </label>

                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                    <input
                      type="radio"
                      name="color-choice"
                      value="White"
                      class="sr-only"
                      aria-labelledby="color-choice-1-label"
                    />
                    <p id="color-choice-1-label" class="sr-only">
                      White
                    </p>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"
                    ></span>
                  </label>

                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-500">
                    <input
                      type="radio"
                      name="color-choice"
                      value="Washed Gray"
                      class="sr-only"
                      aria-labelledby="color-choice-2-label"
                    />
                    <p id="color-choice-2-label" class="sr-only">
                      Washed Gray
                    </p>
                    <span
                      aria-hidden="true"
                      class="h-8 w-8 bg-gray-500 border border-black border-opacity-10 rounded-full"
                    ></span>
                  </label>
                </div>
              </div>
              <div>
                <h3 class="text-sm text-gray-600 mb-2">Size</h3>

                <div class="flex items-center space-x-3">
                  <p>{item.size}</p>
                </div>
              </div>

              <div class="mt-10 flex sm:flex-col1">
                <button
                  type="submit"
                  class="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500 sm:w-full"
                >
                  Add to bag
                </button>

                <button
                  type="button"
                  class="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <svg
                    class="h-6 w-6 flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span class="sr-only">Add to favorites</span>
                </button>
              </div>
            </div>

            <section aria-labelledby="details-heading" class="mt-12">
              <h2 id="details-heading" class="sr-only">
                Additional details
              </h2>

              <div class="border-t divide-y divide-gray-200">
                <div>
                  <div class="space-y-2 divide-y divide-gray-200">
                    <details
                      class="group p-6 [&_summary::-webkit-details-marker]:hidden"
                      open
                    >
                      <summary class="flex items-center justify-between cursor-pointer">
                        <h2 class="font-medium text-gray-900">Sizing</h2>

                        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>

                    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden mt-2">
                      <summary class="flex items-center justify-between cursor-pointer">
                        <h2 class="font-medium text-gray-900">Return</h2>

                        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>
                    <details class="group p-6 [&_summary::-webkit-details-marker]:hidden mt-2">
                      <summary class="flex items-center justify-between cursor-pointer">
                        <h2 class="font-medium text-gray-900">Price</h2>

                        <span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-100 group-open:opacity-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </summary>

                      <p class="mt-4 leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBody;
