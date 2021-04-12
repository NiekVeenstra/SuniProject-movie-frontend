import React from "react";
import ReactPlayer from "react-player/youtube";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <div className="play-video__container">
        <ReactPlayer
          className="play-video__player"
          width="100%"
          height="100%"
          playing={true}
          // muted={mute}
          controls={true}
          loop={true}
          url="https://www.youtube.com/embed/odM92ap8_c0"
        ></ReactPlayer>
      </div>
    </div>
  );
};

export default PlayVideo;
