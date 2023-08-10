import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import ArticlesFilters from "../components/ArticlesFilters";

const Articles = ({ articles }) => {
  //SEARCH/FILTERS LOGIC
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
console.log(articles)
  //FILTERING THE MAPPING
  const filteredArticles = articles.filter((article) => {
    const topicFilter =
      selectedTopic === "all" || article.topic === selectedTopic;
    const searchFilter = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return topicFilter && searchFilter;
  });

  const sortedArticles = filteredArticles.slice().sort((a, b) => {
    if (sortBy === "recent") {
      return a.createdAt - b.createdAt;
    } else {
      return b.createdAt - a.createdAt;
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow pt-16 bg-[#e5e7eb]">
        <Navbar />
        <div className="bg-[#F0F0F0] h-full">
          <ArticlesFilters
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <div className="container grid w-full gap-4 px-4 py-10 mx-auto md:grid-cols-3 md:px-0">
            {sortedArticles.map((article) => (
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
