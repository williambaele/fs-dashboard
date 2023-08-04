import React from "react";

const ArticlesFilters = ({
  selectedTopic,
  setSelectedTopic,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="container mx-auto pt-10 px-4 md:px-0">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <select
            className="rounded-2xl bg-white p-3 border border-gray-300 text-xs md:text-md"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="all">All topics</option>
            <option value="Garden">Garden</option>
            <option value="Sport">Sport</option>
            <option value="Fashion">Fashion</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
          <input
            placeholder="Search an article"
            type="text"
            className="outline-none rounded-2xl bg-white p-3 border border-gray-300 text-xs md:text-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <select
          className="rounded-2xl bg-white p-3 border border-gray-300 text-xs md:text-md"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="recent">Most recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default ArticlesFilters;
