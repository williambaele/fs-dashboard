import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Item ID: {id}</p>
    </div>
  );
};

export default Item;
