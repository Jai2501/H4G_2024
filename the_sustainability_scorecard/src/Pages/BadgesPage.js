import React from "react";
import "./BadgesPage.css";

import BottomTabBar from "../Components/BottomTabBar";

function BadgesPage() {
  return (
    <div className="badges-page">
      <div>
        <img
          className="badges-page-image"
          src="Pages/BadgesPage.png"
          alt="icon"
        ></img>
      </div>
      <BottomTabBar />
    </div>
  );
}

export default BadgesPage;
