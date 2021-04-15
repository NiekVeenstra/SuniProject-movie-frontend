import React, { useContext, useState } from "react";
import { Context } from "../../../Context/Context";
import VideoPreview from "./VideoPreview";
import VideoPreviewText from "./VideoPreviewText";

const MovieInfo = () => {
  const [display, setDisplay] = useState(Context)
  console.log(display._currentValue.display)
  return (
    <div className={display._currentValue.display ? "movieInfo" : "movieInfo-hide"}>
      <VideoPreview />
      <VideoPreviewText />
    </div>
  );
};

export default MovieInfo;
