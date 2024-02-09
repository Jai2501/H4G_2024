import React from "react";
import "./BottomTabBar.css";

import { useNavigate } from "react-router-dom";

function BottomTabBar() {
  const navigate = useNavigate();

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const navigateToRanks = () => {
    navigate("/ranks");
  };

  const navigateToUpload = () => {
    navigate("/upload");
  };

  const navigateToBadges = () => {
    navigate("/badges");
  };

  const navigateToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="bottom-tab-bar">
      <div className="btb-icon" onClick={navigateToDashboard}>
        <img src="/BottomTabBarAssets/HomeIcon.svg" alt="icon"></img>
        <p> Home </p>
      </div>
      <div className="btb-icon" onClick={navigateToRanks}>
        <img src="/BottomTabBarAssets/RankIcon.svg" alt="icon"></img>
        <p> Ranks </p>
      </div>
      <div className="btb-icon" onClick={navigateToUpload}>
        <img src="/BottomTabBarAssets/UploadIcon.svg" alt="icon"></img>
        <p> Upload </p>
      </div>
      <div className="btb-icon" onClick={navigateToBadges}>
        <img src="/BottomTabBarAssets/BadgeIcon.svg" alt="icon"></img>
        <p> Badges </p>
      </div>
      <div className="btb-icon" onClick={navigateToProfile}>
        <img src="/BottomTabBarAssets/ProfileIcon.svg" alt="icon"></img>
        <p> You </p>
      </div>
    </div>
  );
}

export default BottomTabBar;
