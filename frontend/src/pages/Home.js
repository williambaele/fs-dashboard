import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrendingTopics from "../components/TrendingTopics";
import HeroBanner from "../components/HeroBanner";
import TrendingAuthors from "../TrendingAuthors";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <HeroBanner />
        <TrendingTopics />
        <TrendingAuthors/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
