import React from "react";

const HeroSlider = () => {
  return (
    <div className="container mx-auto w-full pt-20 pb-10 px-4 md:px-0">
      <div className="h-[300px] md:h-[500px] grid md:grid-cols-8">
        <div className="md:col-span-3 bg-green-200 h-full"></div>
        <div
          className="md:col-span-5 bg-red-200 h-full bg-cover rounded-2xl"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80")',
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroSlider;
