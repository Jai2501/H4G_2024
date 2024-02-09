import React from "react";
import "./RanksPage.css";

import BottomTabBar from "../Components/BottomTabBar";

function RanksPage() {
  return (
    <div className="ranks-page">
      <div>
        <img
          className="rank-page-image"
          src="Pages/LeaderboardPage.png"
          alt="icon"
        ></img>
      </div>
      <BottomTabBar />
    </div>
  );
}

export default RanksPage;
