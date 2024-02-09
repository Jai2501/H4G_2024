import React from "react";
import "./Dashboard.css";

import DashboardNavigationBar from "../Components/DashboardNavigationBar";
import BottomTabBar from "../Components/BottomTabBar";

function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardNavigationBar />
      <BottomTabBar />
    </div>
  );
}

export default Dashboard;
