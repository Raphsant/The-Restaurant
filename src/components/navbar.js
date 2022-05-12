import React from "react";
import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";
import Key from "../img/key.svg";
import Card from "../img/tarot-card.svg";
import Skull from "../img/skull.svg";
import KeySelected from "../img/key-selected.svg";
import CardSelected from "../img/tarot-card-selected.svg";
import SkullSelected from "../img/skull-selected.svg";

const Navbar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <nav id="navbar">
      <ul id="navbar__list">
        <li className="navbar__list--item">
          <Link classname={"link"} to={"/quests"}>
            <div className="nav__li-wrapper">
              <img
                className={"nav-icon"}
                src={pathname === "/quests" ? KeySelected : Key}
                alt=""
                style={{ fill: "red" }}
              />
              <div style={{ color: pathname === "/quests" ? "blue" : "gray" }}>
                Quests
              </div>
            </div>
          </Link>
        </li>
        <li className="navbar__list--item">
          <Link classname={"link"} to={"/"}>
            <div className="nav__li-wrapper">
              <img
                className={"nav-icon"}
                src={pathname === "/" ? SkullSelected : Skull}
                alt=""
              />
              <div style={{ color: pathname === "/" ? "yellow" : "gray" }}>
                Main
              </div>
            </div>
          </Link>
        </li>
        <li className="navbar__list--item">
          <Link classname={"link"} to={"/Collection"}>
            <div className="nav__li-wrapper">
              <img
                className={"nav-icon"}
                src={pathname === "/Collection" ? CardSelected : Card}
                alt=""
              />
              <div
                style={{
                  color: pathname === "/Collection" ? "crimson" : "gray",
                }}
              >
                Collection
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
