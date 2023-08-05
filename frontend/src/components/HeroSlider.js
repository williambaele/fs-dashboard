import React, { useEffect, useRef, useState } from "react";
import ArticleStats from "./ArticleStats";
import { Link } from "react-router-dom";

//HERO
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../index.css";
import { Navigation } from "swiper/modules";
import SwiperNavButtons from "./SwiperNavButtons";

const HeroSlider = ({ articles }) => {

  //AUTHOUR'S PSEUDO
  const [users, setUsers] = useState({});
  useEffect(() => {
    async function fetchUsersPseudo() {
      const userPromises = articles.map(async (article) => {
        const response = await fetch(`/api/user/${article.user}`);
        const userData = await response.json();
        return { [article.user]: userData.pseudo };
      });

      const usersData = await Promise.all(userPromises);
      const usersMap = usersData.reduce(
        (acc, data) => ({ ...acc, ...data }),
        {}
      );
      setUsers(usersMap);
    }

    fetchUsersPseudo();
  }, [articles]);

  return (
    <div className="container mx-auto w-full pt-10 md:pt-20 pb-10 px-4 md:px-0">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="mySwiper h-full"
      >
        {articles.map((article, index) => {
          //TOPIC LABEL COLOR
          let topicColor = null;

          switch (article.topic) {
            case "Sport":
              topicColor = "blue";
              break;
            case "Fashion":
              topicColor = "purple";
              break;
            case "Garden":
              topicColor = "green";
              break;
            case "Travel":
              topicColor = "orange";
              break;
            default:
              topicColor = "red";
              break;
          }
          //FORMAT DATE
          const dateObject = new Date(article.createdAt);
          const day = String(dateObject.getDate()).padStart(2, "0");
          const month = String(dateObject.getMonth() + 1).padStart(2, "0");
          const year = String(dateObject.getFullYear()).slice(-2);
          const classicDateFormat = `${day}/${month}/${year}`;

          return (
            <SwiperSlide key={index}>
              <div className="h-full md:h-[500px] grid md:grid-cols-8">
                <div className="md:col-span-3 h-full flex items-center -mt-10 md:-mt-0 md:-mr-10 z-10">
                  <div
                    className={`bg-white shadow-sm blur-10 h-60 md:h-80 w-full z-12 rounded-3xl flex flex-col space-y-4 md:space-y-6 p-6 md:p-10 relative`}
                  >
                    <p
                      className={`w-fit  px-2 text-sm rounded-lg bg-${topicColor}-300 text-${topicColor}-500 `}
                    >
                      {article.topic}
                    </p>
                    <Link to={`/article/${article._id}`}>
                      <h2 className="text-xl md:text-2xl font-large text-left">
                        {article.title}
                      </h2>
                    </Link>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://ncmaz-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.054bee42.jpg&w=256&q=75"
                        alt=""
                        className="rounded-full h-10"
                      />
                      <div className="grid gap-1 text-left">
                        <Link to={`/user/${article.user}`}>
                          <p className="text-gray-900 text-md md:text-lg font-bold">
                            {users[article.user]}
                          </p>
                        </Link>
                        <p className="text-gray-300 text-sm">
                          {classicDateFormat}
                        </p>
                      </div>
                    </div>
                    <ArticleStats />
                    <div className="absolute top-0 md:top-4 right-10 h-10 w-14 flex justify-between items-center">
                      <SwiperNavButtons />
                    </div>
                  </div>
                </div>
                <div
                  className="md:col-span-5 bg-red-200 h-80 order-first md:order-last	md:h-full bg-cover rounded-2xl z-1"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1559305289-4c31700ba9cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
