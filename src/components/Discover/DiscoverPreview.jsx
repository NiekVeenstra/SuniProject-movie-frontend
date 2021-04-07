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
    </div>
  );
};

export default DiscoverPreview;
