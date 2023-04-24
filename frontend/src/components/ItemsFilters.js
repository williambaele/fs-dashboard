import React from "react";

const ItemsFilters = () => {
  const brands = ["Nike", "Jordan", "New Balance", "Yeezy", "Adidas"];
  const colors = ["Red", "Yellow", "White", "Orange", "Pink"];
  const sizes = ["36", "36.5", "37", "37.5", "38", "39", "40", "40.5", "41", "42", "43", "44", "44.5", "45"];


  return (
    <div>
      <form class="hidden lg:block">
        <div class="border-b border-gray-200 py-6">
          <h3 class="font-medium text-gray-900"> Colors </h3>
          <div class="pt-6">
            <div class="space-y-4">
              {colors &&
                colors.map((color) => (
                  <div class="flex items-center">
                    <input
                      value={color}
                      type="checkbox"
                      class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label class="ml-3 text-sm text-gray-600">{color}</label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div class="border-b border-gray-200 py-6">
          <h3 class="font-medium text-gray-900"> Brands </h3>
          <div class="pt-6">
            <div class="space-y-4">
              {brands &&
                brands.map((brand) => (
                  <div class="flex items-center">
                    <input
                      value={brand}
                      type="checkbox"
                      class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label class="ml-3 text-sm text-gray-600">{brand}</label>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div class="border-b border-gray-200 py-6">
          <h3 class="font-medium text-gray-900"> Sizes </h3>
          <div class="pt-6">
            <div class="grid grid-cols-2 gap-4">
              {sizes &&
                sizes.map((size) => (
                  <div class="flex items-center">
                    <input
                      value={size}
                      type="checkbox"
                      class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <label class="ml-3 text-sm text-gray-600">{size}</label>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ItemsFilters;
