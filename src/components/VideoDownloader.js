import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function VideoDownloader(props) {
  const { url } = props;
  return (
    <div>
      {url && (
        <video
          style={{ height: "80vh" }}
          src={url}
          id="videoPlayer"
          controls
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default VideoDownloader;
