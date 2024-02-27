import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Product from './Product';

function App() {
  const userLoggedIn = false; // Set this based on user login status

  const products = [
    {
      name: 'Ceylon',
      price: 'R9.99',
      description: 'Free Leaves From Sri Lanka',
    },
    {
      name: 'Coffee Beans',
      price: 'R19.99',
      description: 'Beans from Ethiopia',
    },
    {
      name: 'Rooibos Tea',
      price: 'R29.99',
      description: 'Fresh Leaves from the Cape',
    },
  ];

  return (
    <div className="container mt-5">
      <Header loggedIn={userLoggedIn} />
      <LandingPage />
      <hr className="my-5" />
      <h2 className="mb-4">Products:</h2>
      <div className="row">
        {products.map((product, index) => (
          <div className="col-lg-4" key={index}>
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
