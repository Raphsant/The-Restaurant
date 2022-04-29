import React from "react";
import Navbar from "../components/navbar";
import "../styles/main.css";
import Menu from "./menu";

const MainPage = () => {
  return (
    <div id={"wrapper"}>
      <Navbar />
      <Menu />
    </div>
  );
};
export default MainPage;
