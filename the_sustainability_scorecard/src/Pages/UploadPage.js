import React from "react";
import "./UploadPage.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import BottomTabBar from "../Components/BottomTabBar";

function UploadPage() {
  const options = [
    "-- Select One --",
    "Recycling",
    "Cleanup",
    "Farming",
    "Transport",
    "Consumption",
    "Home Improvement",
    "Events",
    "Best Out Of Waste",
  ];
  const defaultOption = options[0];

  return (
    <div className="upload">
      <div className="top-bar">
        <p>New Activity</p>
        <p>Publish</p>
      </div>
      <div className="take-image">
        <img src="UploadPageAssets/CameraIcon.png" alt="camera-icon"></img>
        <p>Take an Image</p>
      </div>
      <div className="category-selection">
        <p>Select Category</p>
        <div className="category">
          <Dropdown
            className="category-dropdown"
            options={options}
            value={defaultOption}
            placeholder="-- Select One --"
          />
        </div>
        <p>Title</p>
        <input placeholder="E.g. Recycling in my house"></input>
        <p>Description (optional)</p>
        <input placeholder="Write a caption"></input>
      </div>
      <BottomTabBar />
    </div>
  );
}

export default UploadPage;
