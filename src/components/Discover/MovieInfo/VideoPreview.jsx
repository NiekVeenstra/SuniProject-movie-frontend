import React, { useContext, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Context } from "../../../Context/Context";
import VideoPreviewPlayPanel from "./VideoPreviewPlayPanel";

const VideoPreview = ({ fanArt2, videoPrev2 }) => {
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
          controls={false}
          loop={true}
          // backend
          // url={videoPrev2.key}
          // api
          url={`https://www.youtube.com/watch?v=${videoPrev2.key}`}
        ></ReactPlayer>
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
