import React from "react";
import ArticleStats from "./ArticleStats";

const HeroSlider = () => {
  //TOPIC LABEL COLOR
  // let topicColor = null;

  // switch (article.topic) {
  //   case "Sport":
  //     topicColor = "blue";
  //     break;
  //   case "Fashion":
  //     topicColor = "purple";
  //     break;
  //   case "Garden":
  //     topicColor = "green";
  //     break;
  //   case "Travel":
  //     topicColor = "orange";
  //     break;
  //   default:
  //     topicColor = "red";
  //     break;
  // }

  return (
    <div className="container mx-auto w-full pt-20 pb-10 px-4 md:px-0">
      <div className="h-[300px] md:h-[500px] grid md:grid-cols-8">
        <div className="md:col-span-3  h-full flex items-center -mr-10 z-10">
          <div className="bg-white shadow-sm blur-10 h-80 w-full z-12 rounded-3xl flex flex-col space-y-6 p-10 relative">
            <p
              className={`w-fit  px-2 text-sm rounded-lg bg-green-300 text-green-500 `}
            >
              Garden
            </p>
            <h2 className="text-2xl font-large">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <div className="flex items-center gap-4">
              <img
                src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
                alt=""
                className="rounded-full h-10"
              />
              <div className="grid gap-1">
                <p className="text-gray-900 text-lg font-bold">John Doe</p>
                <p className="text-gray-300 text-sm">22/08/2023</p>
              </div>
            </div>
            <ArticleStats />
            <div className="absolute top-4 right-8 h-10 w-14 flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-arrow-left-circle cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-arrow-right-circle cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="md:col-span-5 bg-red-200 h-full bg-cover rounded-2xl z-1"
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
