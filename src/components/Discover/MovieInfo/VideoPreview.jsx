import React, { useContext, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Context } from "../../../Context/Context";
import VideoPreviewPlayPanel from "./VideoPreviewPlayPanel";

const VideoPreview = ({ fanArt2 }) => {
  const [mute, setMute] = useState(true);
  const { moreInfo, setMoreInfo } = useContext(Context);

  return (
    <div className="videoPreview">
      <div className="videoPreview__container">
        <ReactPlayer
          className="videoPreview__player"
          width="100%"
          height="100%"
          playing={true}
          muted={mute}
          controls={true}
          loop={true}
          url="https://www.youtube.com/embed/odM92ap8_c0"
        // onLoad={() => setMute(!mute)}
        ></ReactPlayer>
        {/* <Link to="/watch" className="movie-card__play-movie">
          play
        </Link> */}
        <button className="videoPreview__close-window" onClick={() => setMoreInfo(!moreInfo)}>
          <strong>X</strong>
        </button>
        <VideoPreviewPlayPanel fanArt2={fanArt2} />

        <button className="preview__button-sound2" onClick={() => setMute(!mute)}>
          <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
        </button>
      </div>

    </div>
  );
};

export default VideoPreview;
