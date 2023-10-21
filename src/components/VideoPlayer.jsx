import ReactPlayer from "react-player";
import React, { useState } from "react";
import XrayComponent from "./Xray";

const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const handleProgress = (progress) => {
    setCurrentTime(progress.playedSeconds);
  };

  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=CZg1D6C7-ik"
        controls
        onProgress={handleProgress}
        width="640px"
        height="360px"
        playing
        volume={0.8}
        muted={true}
        loop={false}
        playbackRate={1}
        youtubeConfig={{
          playerVars: {
            showinfo: 1,
            controls: 1,
            rel: 0,
            autoplay: 1,
            mute: 1,
            start: 0,
            end: 0,
            loop: 0,
            iv_load_policy: 3,
            fs: 0,
            disablekb: 1,
            modestbranding: 1,
            playsinline: 1,
          },
        }}
      />
      <h2>Current Time: {currentTime.toFixed(0)}</h2>
      <XrayComponent currentTime={currentTime} />
    </div>
  );
};

export default VideoPlayer;
