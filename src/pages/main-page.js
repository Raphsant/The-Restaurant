import React from "react";
import Navbar from "../components/navbar";
import "../styles/main.css";
import Menu from "./menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestPage from "./quest-page";
import CollectionPage from "./collection-page";
import Clock from "react-live-clock";

const MainPage = () => {
  return (
    <div id={"wrapper"}>
      <Clock
        format={"h:mm:ss"}
        style={{
          fontSize: "1.5em",
          textAlign: "center",
          color: "#ebf7fc",
        }}
        ticking={true}
      />
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" name={"Menu"} element={<Menu />} />
          <Route path="/Quests" name={"Quests"} element={<QuestPage />} />
          <Route
            path="/Collection"
            name={"Collection"}
            element={<CollectionPage />}
          />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};
export default MainPage;
