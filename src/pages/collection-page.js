import React from "react";
import "../styles/collection.css";
import { imgData } from "../data/data";
const CollectionPage = () => {
  return (
    <div id="collection-wrapper">
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#FF3366",
          color: "black",
          margin: "1.5rem 1rem",
          fontSize: "1.3rem",
          padding: "0 0.5rem",
        }}
      >
        Card Collection
      </h1>
      {imgData.map((image) => {
        return (
          <div className="collection-card" key={image}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default CollectionPage;
