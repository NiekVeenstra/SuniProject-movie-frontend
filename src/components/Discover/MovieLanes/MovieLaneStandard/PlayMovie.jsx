import React, { useContext, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Context } from "../../../../Context/Context";

const PlayMovie = () => {
  const [mute] = useState(true);
  const { playMovie } = useContext(Context);
  console.log(playMovie);
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
          // backend
          // url={playVideo}
          // api
          //   url={`https://www.youtube.com/watch?v=${playVideo.key}`}
          url={`https://www.youtube.com/watch?v=${playMovie ? playMovie.key: "dQw4w9WgXcQ"}`}
        ></ReactPlayer>
      </div>
    </div>
  );
};

export default PlayMovie;
