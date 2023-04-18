import React from 'react';

import axios from 'axios';
const Test = () => {

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/search',
    params: {
      query: 'pattaya',
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

  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div>
      <p>Hi</p>
    </div>
  );
};

export default Test;
