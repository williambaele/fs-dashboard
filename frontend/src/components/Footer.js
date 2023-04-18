import React from "react";

const Footer = () => {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-[#001220]">
        <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-600 sm:justify-start">
             <p>Lorem</p>
            </div>

            <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
