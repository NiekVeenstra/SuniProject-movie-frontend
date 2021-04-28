import React, { useContext, useEffect, useState } from "react";
import theMovieDB from "../../../apis/theMovieDB";
import { Context } from "../../../Context/Context";
import VideoPreview from "./VideoPreview";
import VideoPreviewText from "./VideoPreviewText";

const MovieInfo = ({ videoInfo, videoInfoID2 }) => {
  const { moreInfo } = useContext(Context);
  const [videoInfo2, setVideoInfo2] = useState({});
  const [videoInfoGenres1, setVideoInfoGenres1] = useState([]);
  const [videoInfoGenres2, setVideoInfoGenres2] = useState([]);
  const [productionComp, setProductionComp] = useState([]);
  const [language, setLanguage] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [Info2] = await Promise.all([theMovieDB.get(`/movie/${videoInfoID2.id}`)]);
      setVideoInfo2(Info2.data);
      setVideoInfoGenres1(Info2.data.genres[0]);
      setVideoInfoGenres2(Info2.data.genres[1]);
      setProductionComp(Info2.data.production_companies[0]);
      setLanguage(Info2.data.spoken_languages[0]);
    };

    fetchData();
  }, [videoInfoID2.id]);

  return (
    <div className={moreInfo ? "movieInfo" : "movieInfo-hide"}>
      <VideoPreview />
      <VideoPreviewText
        videoInfo={videoInfo}
        videoInfo2={videoInfo2}
        videoInfoGenres1={videoInfoGenres1}
        videoInfoGenres2={videoInfoGenres2}
        productionComp={productionComp}
        language={language}
      />
    </div>
  );
};

export default MovieInfo;
