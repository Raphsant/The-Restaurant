import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <ul id="navbar__list">
        <li className="navbar__list--item">Quests</li>
        <li className="navbar__list--item">Main</li>
        <li className="navbar__list--item">Collection</li>
      </ul>
    </nav>
  );
};

export default Navbar;
