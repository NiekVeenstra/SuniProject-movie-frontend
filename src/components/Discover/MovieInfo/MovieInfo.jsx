import React, { useContext, useState } from "react";
import { Context } from "../../../Context/Context";
import VideoPreview from "./VideoPreview";
import VideoPreviewText from "./VideoPreviewText";

const MovieInfo = () => {
  const { moreInfo, setMoreInfo } = useContext(Context);
  return (
    <div className={moreInfo ? "movieInfo" : "movieInfo-hide"}>
      <VideoPreview />
      <VideoPreviewText />
    </div>
  );
};

export default MovieInfo;
