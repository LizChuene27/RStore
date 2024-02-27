import React from 'react';

function Product({ name, price, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Product;
