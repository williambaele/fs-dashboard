import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      if (search.trim() === "") {
        return;
      }

      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
          query: search,
          limit: '10',
          offset: '0',
          units: 'km',
          location_id: '1',
          currency: 'USD',
          sort: 'relevance',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '25394b4fd3mshbcb41c889e8189dp1d4460jsn97efb6006edd',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setResults(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, [search]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Your new destination"
        />

        {results.data && results.data.map((item) => (
          <div className="bg-green-600 p-4 rounded-lg m-4">

            <p className="text-red-500"key={item.location_id}>{item.result_object.name}</p>
            <p>{item.review_snippet.snippet && item.review_snippet.snippet}</p>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SearchForm;
