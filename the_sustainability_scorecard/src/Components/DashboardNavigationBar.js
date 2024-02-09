import React from "react";
import "./DashboardNavigationBar.css";

function DashboardNavigationBar() {
  return (
    <div className="dashboard-navigation-bar">
      <div className="left-side">Home</div>
      <div className="right-side">
        <img
          className="dashboard-navbar-icon"
          src="/DashboardNavigationBarAssets/SearchIcon.png"
          alt="icon"
        ></img>
        <img
          className="dashboard-navbar-icon"
          src="/DashboardNavigationBarAssets/BellIcon.png"
          alt="icon"
        ></img>
      </div>
    </div>
  );
}

export default DashboardNavigationBar;
