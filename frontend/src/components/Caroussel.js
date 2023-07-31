import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Navigation } from "swiper/modules";

const Caroussel = () => {
  const slides = [
    {
      image: "bg-green-400",
      title: "Lorem ipsum",
    },
    {
      image: "bg-green-400",
      title: "Lorem ipsum",
    },
    {
      image: "bg-green-400",
      title: "Lorem ipsum",
    },
    {
      image: "bg-green-400",
      title: "Lorem ipsum",
    },
  ];
  return (
    <div className="h-full bg-purple-900">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center bg-green-400 h-full">
              <h2 className="font-bold text-2xl">
                {slide.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Caroussel;
