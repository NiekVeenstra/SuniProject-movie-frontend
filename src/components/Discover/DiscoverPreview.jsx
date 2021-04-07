import React from "react";
import ReactPlayer from "react-player/youtube";

const DiscoverPreview = () => {
  return (
    <div className="preview">
      <ReactPlayer
        className="preview__player"
        width="100%"
        height="100%"
        playing="true"
        muted="true"
        controls="false"
        loop="true"
        url="https://www.youtube.com/embed/TgB7rMuxY-s"
      ></ReactPlayer>
      <button>
        <img
          src="https://i.postimg.cc/MKKfY7Xg/3643734-high-sound-speaker-voice-volume-113403.png"
          alt="turn sound on/off"
        />
      </button>
    </div>
  );
};

export default DiscoverPreview;
