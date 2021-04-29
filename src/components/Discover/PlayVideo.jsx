import React, { useContext, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Context } from "../../Context/Context";

const PlayVideo = () => {
  const [mute] = useState(true);
  const { playVideo } = useContext(Context);
  console.log(playVideo);
  return (
    <div className="play-video">
      <div className="play-video__container">
        <ReactPlayer
          className="play-video__player"
          width="100%"
          height="100%"
          playing={true}
          muted={!mute}
          controls={true}
          loop={true}
          url={playVideo}
        ></ReactPlayer>
      </div>
    </div>
  );
};

export default PlayVideo;
