import React from "react";
import YouTube from "react-youtube";
import "./index.scss";

export default function DonorCharityProfileVideo() {
  const videoId = "4T7HwLGNiuw";

  return (
    <div className="CharityVideo">
      <YouTube videoId={videoId} 
      opts={{ 
        width: "320", 
        height: "240", 
        playerVars: { autoplay: 1, muted: 1 } 
        }} />
    </div>
  );
}
   