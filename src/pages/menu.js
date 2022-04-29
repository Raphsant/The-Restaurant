import React from "react";
import "../styles/menu.css";
const Menu = () => {
  return (
    <div id={"menu__container"}>
      <div id={"title__container"}>
        <h1 id={"title__heading"}>Catacumbias</h1>
      </div>
      <div id="menu__list">
        <ul id={"menu__list--ul"}>
          <li className="menu__list--item">
            <h1>Dish one</h1>
            <div className="menu__list--subtext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, tempore.
            </div>
          </li>
          <li className="menu__list--item">
            <h1>Dish two</h1>
            <div className="menu__list--subtext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              necessitatibus!
            </div>
          </li>
          <li className="menu__list--item">
            <h1>Dish three</h1>
            <div className="menu__list--subtext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
              obcaecati.
            </div>
          </li>
          <li className="menu__list--item">
            <h1>Dish four</h1>
            <div className="menu__list--subtext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
              eaque.
            </div>
          </li>
          <li className="menu__list--item">
            <h1>Dish five</h1>
            <div className="menu__list--subtext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore, vero?
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
