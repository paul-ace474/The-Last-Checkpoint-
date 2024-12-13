import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => (
  <nav className="nav">
    <div>
      <Link to={"/home"} className="everything-auto"><h1>
        <span className="span">EVERYTHING</span><span></span> AUTO
      </h1></Link>
    </div>
    <div className="navlink">
      <Link to={"/home"} className="link">Home</Link>
      <Link to={"/rentals"} className="link">Rent a car</Link>
      <Link to={"/cars/:id"} className="link">Buy a car</Link>
    </div>
    <div className="navlink">
      <Link to={"/login"} className="link">Login</Link>
      <Link to={"/register"}  className="link">Register</Link>
    </div>
  </nav>
);

export default Navbar;
