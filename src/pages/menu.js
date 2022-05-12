import React, { useState } from "react";
import Modal from "react-modal";
import Logo from "../img/catacumbias-logo.png";
import Snake from "../img/snake.png";
import "../styles/menu.css";
const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000000",
      color: "#453CE8",
    },
  };

  return (
    <div id={"menu__container"}>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>
          Located in the <span style={{ color: "#FF3366" }}>916</span> Building,
          room 111
        </p>
        <p style={{ textAlign: "center" }}>
          Made by the <span style={{ color: "#E7E258" }}>IAM Team SP2022</span>
        </p>
      </Modal>
      <div id={"title__container"} onClick={openModal}>
        <img src={Snake} alt="" id="sub-logo" />
        <img id="logo" src={Logo} alt="" />
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
