import React from "react";
import ReactPlayer from "react-player/youtube";

const BlankPage = () => {
  return (
    <div className="home-page">
        <h1>Blank</h1>
        <ReactPlayer
          className="preview__player"
          width="100%"
          height="100%"
          playing={true}
          muted={true}
          controls={false}
          loop={true}
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO"
        ></ReactPlayer>
    </div>
  );
};

export default BlankPage;