import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import Filters from "../components/Filters";

const Articles = ({articles}) => {


  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <Navbar />
        <div className="bg-[#F0F0F0] h-full">
          <Filters />
          <div className="container mx-auto py-10 grid grid-cols-2 md:grid-cols-3 gap-4 w-full px-4 md:px-0">
            {articles.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Articles;
