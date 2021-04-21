import React, { useContext, useEffect, useState } from "react";
import theMovieDB from "../../../apis/theMovieDB";
import { Context } from "../../../Context/Context";
import VideoPreview from "./VideoPreview";
import VideoPreviewText from "./VideoPreviewText";

const MovieInfo = ({videoInfo}) => {
  const { moreInfo, setMoreInfo } = useContext(Context);
  const [videoInfo2, setvideoInfo2] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [Info2] = await Promise.all([
        theMovieDB.get(`/movie/${videoInfo.id}`),
      ]);
      console.log(Info2);
      setvideoInfo2(Info2);
    };

    fetchData();
  }, []);

  return (
    <div className={moreInfo ? "movieInfo" : "movieInfo-hide"}>
      <VideoPreview />
      <VideoPreviewText videoInfo={videoInfo} videoInfo2={videoInfo2}/>
    </div>
  );
};

export default MovieInfo;
