import React from "react";
import Navbar from "../components/navbar";
import "../styles/main.css";
import Menu from "./menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainPage = () => {
  return (
    <div id={"wrapper"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" name={"Menu"} element={<Menu />} />
        </Routes>
      </BrowserRouter>
      <Navbar />
    </div>
  );
};
export default MainPage;
