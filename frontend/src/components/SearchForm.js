import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);



  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/search',
    params: {
      query: search,
      limit: '30',
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


  useEffect(() => {
    if (search.trim() === "") {
      return;
    }
    axios.request(options).then(function (response) {
      setResults(response.data.data);
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

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

        {results.data.map((item) => (
          <p>{item.name}</p>
        ))}
      </form>
    </div>
  );
};

export default SearchForm;
