import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link" activeClassName="active">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/shopping" className="nav-link" activeClassName="active">Shopping</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/interest" className="nav-link" activeClassName="active">Interest</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/legal" className="nav-link" activeClassName="active">Legal</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
