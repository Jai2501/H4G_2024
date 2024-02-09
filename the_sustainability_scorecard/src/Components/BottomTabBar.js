import React from "react";
import "./BottomTabBar.css";

function BottomTabBar() {
  return (
    <div className="bottom-tab-bar">
      <div className="btb-icon">
        <img src="/BottomTabBarAssets/HomeIcon.svg" alt="icon"></img>
        <p> Home </p>
      </div>
      <div className="btb-icon">
        <img src="/BottomTabBarAssets/RankIcon.svg" alt="icon"></img>
        <p> Ranks </p>
      </div>
      <div className="btb-icon">
        <img src="/BottomTabBarAssets/UploadIcon.svg" alt="icon"></img>
        <p> Upload </p>
      </div>
      <div className="btb-icon">
        <img src="/BottomTabBarAssets/BadgeIcon.svg" alt="icon"></img>
        <p> Badges </p>
      </div>
      <div className="btb-icon">
        <img src="/BottomTabBarAssets/ProfileIcon.svg" alt="icon"></img>
        <p> You </p>
      </div>
    </div>
  );
}

export default BottomTabBar;
