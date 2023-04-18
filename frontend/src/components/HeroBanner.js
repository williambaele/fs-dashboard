import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src="https://images.pexels.com/photos/5226483/pexels-photo-5226483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">Plan your holiday seemless</h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>
              <Link to="/plan">
              <p
                class="mt-8 inline-block rounded bg-[#FBAE3C] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#fbb650]"
              >
                Plan your holdiay
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
