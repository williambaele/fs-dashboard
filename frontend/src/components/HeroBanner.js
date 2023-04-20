import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="bg-slate-100">
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-20 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://global-uploads.webflow.com/624260f56bd430bc07d61693/6280fca6a8b80c19cf52889a_Untitzzled-2-p-1600.jpeg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Find your gem seemless
              </h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>
              <Link to="/items">
                <p class="mt-8 inline-block rounded bg-[#F45050] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#f56262]">
                  Search a pair
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroBanner;
