import React from "react";
import "../styles/quest.css";

const Quest = ({ data }) => {
  return (
    <div>
      <div id="quest-wrapper">
        <div id="quest-text__wrapper">
          <div id="quest-text__title">
            <h2>{data.title}</h2>{" "}
          </div>
          <div id="quest-text__subtext">{data.subtext}</div>
        </div>
        <div id="quest-check">
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Quest;
