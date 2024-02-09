import React from "react";
import "./ProfilePage.css";

import BottomTabBar from "../Components/BottomTabBar";
import ChallengeCompleteBox from "../Components/ChallengeCompleteBox";
import DashboardPost from "../Components/DashboardPost";

function ProfilePage() {
  let sampleData = [
    {
      name: "John Tan",
      time: "Today at 7:38 AM",
      location: "Southwest",
      profilePictureUrl: "ProfilePictureAssets/BoyFive.avif",
      heading: "Recycled my kitchen waste",
      content:
        "Attended GUI’s workshop on recycling last weekend and felt like it’s about time I put thought into action!",
      badgeUrl: "DashboardPostAssets/BadgeIcon.png",
      badgeInfo: "John completed the Recycling Race challenge!",
      uploadedPictureUrl: "DashboardPostAssets/PostPicture.png",
      postCategory: "PostCategories/RecycleCategory.png",
    },
  ];

  return (
    <div className="profile">
      <div className="top-bar">
        <p>You</p>
        <div className="icons">
          <img src="ProfilePageAssets/SearchIcon.png" alt="icon"></img>
          <img src="ProfilePageAssets/SettingsIcon.png" alt="icon"></img>
        </div>
      </div>
      <div className="name-card">
        <div className="profile-picture">
          <img src="ProfilePictureAssets/BoyFive.avif" alt="profile"></img>
        </div>
        <div className="name-and-title">
          <div className="name">John Tan</div>
          <div className="title">Avid Environmentalist</div>
        </div>
        <div className="challenges-completed">
          <div className="number-of-challenges">5</div>
          <div className="challenges-word">Challenges</div>
        </div>
        <div className="badges-obtained">
          <div className="number-of-badges">8</div>
          <div className="badges-word">Badges</div>
        </div>
      </div>
      <div className="scan-qr-code">
        <img src="ProfilePageAssets/QRCodeIcon.png" alt="icon"></img>
        <p>Scan QR to check in</p>
      </div>
      <div className="completed-challenges-heading">
        <div className="completed-challenges-keyword">Completed Challenges</div>
        <div className="see-all-keyword">See all</div>
      </div>
      <div className="completed-challenges">
        <ChallengeCompleteBox
          challengeLogoUrl="ChallengesAssets/RecyclingRaceChallenge.png"
          challengeCompletionDate="Completed on 1 Feb, 2024"
          challengeTitle="Month-Long Recycling"
        />
        <ChallengeCompleteBox
          challengeLogoUrl="ChallengesAssets/CarFreeWeekChallenge.png"
          challengeCompletionDate="Completed on 17 Jan, 2024"
          challengeTitle="Car Free Week"
        />
        <ChallengeCompleteBox
          challengeLogoUrl="ChallengesAssets/ReusableRevolutionChallenge.png"
          challengeCompletionDate="Completed on 2 Jan, 2024"
          challengeTitle="Reusable Revolution"
        />
      </div>
      <div className="activities-heading">Activities</div>
      <div className="activity-post">
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
            postCategory={item.postCategory}
          />
        ))}
      </div>
      <BottomTabBar />
    </div>
  );
}

export default ProfilePage;
