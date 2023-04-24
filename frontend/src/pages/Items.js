import React, { useEffect } from "react";
import Card from "../components/Card";
// import { useAuthContext } from "../hooks/useAuthContext";
import { useItemsContext } from "../hooks/useItemsContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SortItems from "../components/SortItems";
import ItemsFilters from "../components/ItemsFilters";

const Items = () => {
  const { items, dispatch } = useItemsContext();
  // const { user } = useAuthContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };

    fetchItems();
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <div className="bg-[#F0F0F0]">
        <div class="bg-white">
          <div>
            <div
              class="fixed inset-0 flex z-40 lg:hidden"
              role="dialog"
              aria-modal="true"
            >
              <div
                class="fixed inset-0 bg-black bg-opacity-25"
                aria-hidden="true"
              ></div>
            </div>

            <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                  Items
                </h1>

                <div class="flex items-center">
                  <SortItems />
                  <button
                    type="button"
                    class="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  >
                    <span class="sr-only">Filters</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <section class="pt-6 pb-24">
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 ">
                  <ItemsFilters />
                  <div class="lg:col-span-3">
                    <div class="grid md:grid-cols-3 p-2 gap-4 lg:h-full">
                      {items &&
                        items.map((item) => (
                          <Card key={item._id} item={item} />
                        ))}
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Items;
