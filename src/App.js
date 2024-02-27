import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import LandingPage from './LandingPage';
import Product from './Product';
import ProfilePage from './ProfilePage';
import Interest from './InterestCalculator';
import Legal from './Legal';

function App() {
  const userLoggedIn = false; // Set this based on user login status

  return (
    <Router>
      <div>
        <Header loggedIn={userLoggedIn} />
        <Menu />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shopping" element={<Product />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
