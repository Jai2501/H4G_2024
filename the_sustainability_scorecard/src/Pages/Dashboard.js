import React from "react";
import "./Dashboard.css";

import DashboardNavigationBar from "../Components/DashboardNavigationBar";
import BottomTabBar from "../Components/BottomTabBar";
import DashboardPost from "../Components/DashboardPost";

function Dashboard() {
  let sampleData = [
    {
      name: "Tony Tan",
      time: "Today at 7:38 AM",
      location: "Southwest",
      profilePictureUrl: "ProfilePictureAssets/BoyOne.jpeg",
      heading: "Eco-Friendly Commute Challenge",
      content:
        "This month, I've decided to bike to work. Not only am I getting fitter, but I'm also cutting down on emissions. Every little bit helps!",
      badgeUrl: "ChallengesAssets/CarFreeWeekChallenge.png",
      badgeInfo: "John completed the Car-Free Week challenge!",
      uploadedPictureUrl: "PostPictureAssets/Transport.jpeg",
    },
    {
      name: "Gareth Wang",
      time: "Today at 10:19 AM",
      location: "Yishun",
      profilePictureUrl: "ProfilePictureAssets/BoyTwo.jpeg",
      heading: "Visited GUI Site for the first time!!",
      content:
        "Visited GUI for the first time today, and I must tell you, the hype is real! Sustainability, here I come...",
      badgeUrl: "DashboardPostAssets/BadgeIcon.png",
      badgeInfo: "Gareth started the Recycling Race challenge!",
      uploadedPictureUrl: "PostPictureAssets/GUI.jpeg",
    },
    {
      name: "Vibhusha",
      time: "Today at 11:41 AM",
      location: "Jurong",
      profilePictureUrl: "ProfilePictureAssets/GirlOne.jpeg",
      heading: "Conservation Volunteering Day",
      content:
        "Spent yesterday volunteering at the local river clean-up crew. It's amazing what a group of dedicated people can accomplish in a day.",
      badgeUrl: "ChallengesAssets/ReusableRevolutionChallenge.png",
      badgeInfo: "Vibhusha completed the Conservation Champion challenge!",
      uploadedPictureUrl: "PostPictureAssets/RiverCleanup.jpeg",
    },
    {
      name: "Jai",
      time: "Today at 11:41 AM",
      location: "Kent Ridge",
      profilePictureUrl: "ProfilePictureAssets/BoyFour.jpeg",
      heading: "Green Thumb Achievements",
      content:
        "Just finished setting up my first rooftop garden! Excited to see what home-grown veggies can do for my carbon footprint and my cooking.",
      badgeUrl: "ChallengesAssets/CompostingChampionChallenge.png",
      badgeInfo: "Jai completed the Composting Champion challenge!",
      uploadedPictureUrl: "PostPictureAssets/Garden.jpg",
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
