import React from "react";
import "./ChallengeCompleteBox.css";

function ChallengeCompleteBox({
  challengeLogoUrl,
  challengeTitle,
  challengeCompletionDate,
}) {
  return (
    <div className="challenge-box">
      <div className="challenge-logo">
        <img src={challengeLogoUrl} alt="logo"></img>
      </div>
      <div className="challenge-details">
        <div className="challenge-title">{challengeTitle}</div>
        <div className="date-completed">{challengeCompletionDate}</div>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}

export default ChallengeCompleteBox;
