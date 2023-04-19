import React from "react";

const ItemBody = ({ item }) => {
  return (
    <div>
      <div class="relative mx-auto max-w-screen-xl px-4 py-8">
        <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="aspect-square w-full rounded-xl object-cover"
            />

            <div class="grid grid-cols-2 gap-4 lg:mt-4">
              <img
                alt="Les Paul"
                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="aspect-square w-full rounded-xl object-cover"
              />

              <img
                alt="Les Paul"
                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="aspect-square w-full rounded-xl object-cover"
              />

              <img
                alt="Les Paul"
                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="aspect-square w-full rounded-xl object-cover"
              />

              <img
                alt="Les Paul"
                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                class="aspect-square w-full rounded-xl object-cover"
              />
            </div>
          </div>

          <div class="sticky top-4">
            <div class="flex justify-between">
              <div class="max-w-[35ch] space-y-2">
                <h1 class="text-3xl font-bold">{item.title}</h1>
              </div>
              <div className="bg-[#F45050] rounded-xl px-2 py-0.5 flex items-center justify-center">
                <p class="text-lg text-white font-medium">{item.price}€</p>
              </div>
            </div>

            <div class="mt-4">
              <div class="prose max-w-none">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  veniam dicta beatae eos ex error culpa delectus rem tenetur,
                  architecto quam nesciunt, dolor veritatis nisi minus
                  inventore, rerum at recusandae?
                </p>
              </div>
            </div>

            <div class="mt-8">
              <div class="mt-4">
                <p class="text-xl mb-2 font-medium">Color</p>
                <div class="flex flex-wrap gap-1">
                  <span class="group inline-flex py-1 px-2 items-center justify-center rounded-xl border text-xs font-medium">
                    Red
                  </span>
                  <span class="group inline-flex py-1 px-2 items-center justify-center rounded-xl border text-xs font-medium">
                    White
                  </span>
                  <span class="group inline-flex py-1 px-2 items-center justify-center rounded-xl border text-xs font-medium">
                    Grey
                  </span>
                </div>
              </div>
              <div class="mt-4">
                <p class="text-xl mb-2 font-medium">Brand</p>
                <div class="flex flex-wrap gap-1">
                <span class="group inline-flex py-1 px-2 items-center justify-center rounded-xl border text-xs font-medium">
                    {item.brand}
                  </span>
                </div>
              </div>
              <div class="mt-4">
                <p class="text-xl mb-2 font-medium">Size</p>
                <div class="flex flex-wrap gap-1">
                <span class="group inline-flex py-1 px-2 items-center justify-center rounded-xl border text-xs font-medium">
                    {item.size}
                  </span>
                </div>
              </div>

              <div class="mt-8 flex gap-4">
                <button
                  type="submit"
                  class="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                >
                  Send an offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBody;
