import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Your new destination"
        />
      </form>
    </div>
  );
};

export default SearchForm;
