import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";

const DiscoverPreview = () => {
  const [mute, setMute] = useState(true);
  const MovieName = "test";
  const MovieDescription = "test test test test test test test test test";

  return (
    <div className="preview">
      <ReactPlayer
        className="preview__player"
        width="100%"
        height="100%"
        playing={true}
        muted={mute}
        controls={false}
        loop={true}
        url="https://www.youtube.com/embed/TgB7rMuxY-s"
      ></ReactPlayer>
      <div>
        <h1>{MovieName}</h1>
        <p>{MovieDescription}</p>
      </div>
      <button onClick={() => setMute(!mute)}>
        <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
      </button>
    </div>
  );
};

export default DiscoverPreview;
