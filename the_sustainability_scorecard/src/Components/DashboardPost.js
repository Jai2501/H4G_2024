import React from "react";
import "./DashboardPost.css";

// "DashboardPostAssets/ProfileIcon.png"
// "DashboardPostAssets/BadgeIcon.png"
// "DashboardPostAssets/PostPicture.png"

function DashboardPost({
  name,
  time,
  location,
  profilePictureUrl,
  heading,
  content,
  badgeUrl,
  badgeInfo,
  uploadedPictureUrl,
  postCategory,
}) {
  return (
    <div className="dashboard-post">
      <div className="info-section">
        <div className="info">
          <img src={profilePictureUrl} alt="profile-pic"></img>
          <div className="name-location-time">
            <div className="name">{name}</div>
            <div className="time-location">
              <img src={postCategory} alt="catgory"></img>
              {time} · {location}
            </div>
          </div>
        </div>
        <div className="settings">
          <img
            className=""
            src="DashboardPostAssets/SettingsIcon.png"
            alt="icon"
          ></img>
        </div>
      </div>
      <div className="post-details">
        <div className="post-heading">{heading}</div>
        <div className="post-content">{content}</div>
      </div>
      <div className="challenge-info">
        <img className="" src={badgeUrl} alt="badge-icon"></img>
        <p>{badgeInfo}</p>
      </div>
      <div className="post-picture">
        <img src={uploadedPictureUrl} alt="holder"></img>
      </div>
      <div className="post-like-comment-share">
        <div className="post-like">
          <img
            className=""
            src="DashboardPostAssets/ThumbsUpIcon.png"
            alt="icon"
          ></img>
        </div>
        <div className="post-comment">
          <img
            className=""
            src="DashboardPostAssets/CommentIcon.png"
            alt="icon"
          ></img>
        </div>
        <div className="post-share">
          <img
            className=""
            src="DashboardPostAssets/ShareIcon.png"
            alt="icon"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default DashboardPost;
