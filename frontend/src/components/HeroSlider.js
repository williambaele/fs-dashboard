import React from "react";

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
          <div className="bg-white shadow-sm blur-10 h-80 w-full z-12 rounded-3xl flex flex-col space-y-4 p-10">
            <p
              className={`w-fit  px-2 text-sm rounded-lg bg-green-300 text-green-500 `}
            >
              Garden
            </p>
            <h2 className="text-2xl font-large">Lorem ipsum loude</h2>
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
