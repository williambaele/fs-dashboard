import React from "react";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  return (
    <div>
      <div
        aria-labelledby="category-heading"
        class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8 my-10"
      >
        <div class="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2
            id="category-heading"
            class="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Shop by brands
          </h2>
          <Link to="/items">
            <p class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block cursor-pointer">
              Browse all brands<span aria-hidden="true"> &rarr;</span>
            </p>
          </Link>
        </div>

        <div class="mt-4 flow-root">
          <div class="-my-2">
            <div class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
              <div class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                <p class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0555/2766/9968/products/Designudennavn_27_f6af1269-9925-45e9-8353-2f2832f6d0cb.png?v=1641902458"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  ></span>
                  <span class="relative mt-auto text-center text-xl font-bold text-white">
                    Nike
                  </span>
                </p>

                <p class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      src="https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dark-Mocha-2-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1616187367"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  ></span>
                  <span class="relative mt-auto text-center text-xl font-bold text-white">
                    Jordan
                  </span>
                </p>

                <p class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0688/9219/7130/products/s666415324344235101_p173_i1_w828.jpg?v=1677463872"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  ></span>
                  <span class="relative mt-auto text-center text-xl font-bold text-white">
                    Yeezy
                  </span>
                </p>

                <p class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7a8ef1a853eb419fae8caf8800a88359_9366/Chaussure_Campus_00s_Rouge_H03474.jpg"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  ></span>
                  <span class="relative mt-auto text-center text-xl font-bold text-white">
                    Adidas
                  </span>
                </p>

                <p class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      src="https://www.lesitedelasneaker.com/wp-content/images/2022/03/preview-new-balance-2002r-purple-lavender-protection-pack-m2002rdi-banner.jpeg"
                      alt=""
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  ></span>
                  <span class="relative mt-auto text-center text-xl font-bold text-white">
                    New Balance
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 px-4 sm:hidden">
          <p class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all categories<span aria-hidden="true"> &rarr;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCards;
