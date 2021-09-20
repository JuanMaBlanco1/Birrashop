import * as React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <span className="brand">
        <Link to="/">Tienda Online </Link>
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ProducDetail">Productos</Link>
        </li>
        <li>
          <Link to="/">Quienes somos?</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

