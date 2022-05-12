import React from "react";
import Quest from "../components/quest";
import "../styles/quest.css";
import { questData } from "../data/data";

const QuestPage = () => {
  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "#453CE8",
            margin: "1.5rem 4rem",
            fontSize: "1rem",
          }}
        >
          Complete Quests to collect cards
        </h1>
      </div>
      {questData.map((quest) => {
        return <Quest data={quest} />;
      })}
    </div>
  );
};

export default QuestPage;
