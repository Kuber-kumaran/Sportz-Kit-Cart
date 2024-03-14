import React, { useState } from 'react';
import data from "../Assets/Product.json";
import Products from './Products';

const Home = () => {
    const [products] = useState(data);

  return (
    <div className="product-container">
        {products.map((Product) => (
          <Products key={Product.id} Product={Product}/>
        ))}
    </div>
  )
}

export default Home
