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
    if (sortBy === "oldest") {
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
          <div className="container mx-auto py-10 grid  md:grid-cols-3 gap-4 w-full px-4 md:px-0">
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
