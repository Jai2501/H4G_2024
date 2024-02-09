import React from "react";
import "./Dashboard.css";

import DashboardNavigationBar from "../Components/DashboardNavigationBar";
import BottomTabBar from "../Components/BottomTabBar";
import DashboardPost from "../Components/DashboardPost";

function Dashboard() {
  let sampleData = [
    {
      name: "John Tan",
      time: "Today at 7:38 AM",
      location: "Southwest",
      profilePictureUrl: "DashboardPostAssets/ProfileIcon.png",
      heading: "Recycled my kitchen waste",
      content:
        "Attended GUI’s workshop on recycling last weekend and felt like it’s about time I put thought into action!",
      badgeUrl: "DashboardPostAssets/BadgeIcon.png",
      badgeInfo: "John completed the Recycling Race challenge!",
      uploadedPictureUrl: "DashboardPostAssets/PostPicture.png",
    },
    {
      name: "Gareth Wang",
      time: "Today at 10:19 AM",
      location: "Yishun",
      profilePictureUrl: "DashboardPostAssets/ProfileIcon.png",
      heading: "Visited GUI Site for the first time!!",
      content:
        "Visited GUI for the first time today, and I must tell you, the hype is real! Sustainability, here I come...",
      badgeUrl: "DashboardPostAssets/BadgeIcon.png",
      badgeInfo: "Gareth started the Recycling Race challenge!",
      uploadedPictureUrl: "DashboardPostAssets/PostPicture.png",
    },
    {
      name: "Vibhusha",
      time: "Today at 11:41 AM",
      location: "Jurong",
      profilePictureUrl: "DashboardPostAssets/ProfileIcon.png",
      heading: "Conservation Volunteering Day",
      content:
        "Spent yesterday volunteering at the local river clean-up crew. It's amazing what a group of dedicated people can accomplish in a day.",
      badgeUrl: "DashboardPostAssets/BadgeIcon.png",
      badgeInfo: "Vibhusha completed the Conservation Champion challenge!",
      uploadedPictureUrl: "DashboardPostAssets/PostPicture.png",
    },
    {
      name: "Jai",
      time: "Today at 11:41 AM",
      location: "Kent Ridge",
      profilePictureUrl: "DashboardPostAssets/ProfileIcon.png",
      heading: "Green Thumb Achievements",
      content:
        "Just finished setting up my first rooftop garden! Excited to see what home-grown veggies can do for my carbon footprint and my cooking.",
      badgeUrl: "DashboardPostAssets/BadgeIcon.png",
      badgeInfo: "Jai completed the Rooftop Gardener challenge!",
      uploadedPictureUrl: "DashboardPostAssets/PostPicture.png",
    },
  ];

  return (
    <div className="dashboard">
      <DashboardNavigationBar />

      {sampleData.map((item, index) => (
        <DashboardPost
          key={index}
          name={item.name}
          time={item.time}
          location={item.location}
          profilePictureUrl={item.profilePictureUrl}
          heading={item.heading}
          content={item.content}
          badgeUrl={item.badgeUrl}
          badgeInfo={item.badgeInfo}
          uploadedPictureUrl={item.uploadedPictureUrl}
        />
      ))}

      <BottomTabBar />
    </div>
  );
}

export default Dashboard;
