import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingTopics from "../components/TrendingTopics";
import TrendingAuthors from "../TrendingAuthors";
import LatestArticles from "../components/LatestArticles";
import HeroSlider from "../components/HeroSlider";

const Home = ({ articles }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <HeroSlider articles={articles} />
        <TrendingTopics />
        <TrendingAuthors />
        <LatestArticles articles={articles} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
