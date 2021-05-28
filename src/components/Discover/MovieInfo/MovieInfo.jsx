import React, { useContext, useEffect, useState } from "react";
import theMovieDB from "../../../apis/theMovieDB";
import { Context } from "../../../Context/Context";
import VideoPreview from "./VideoPreview";
import VideoPreviewText from "./VideoPreviewText";

const MovieInfo = ({ videoInfo, videoInfoID2, fanArt2, videoPrev2 }) => {
  const { moreInfo, setMoreInfo } = useContext(Context);
  const [videoInfo2, setVideoInfo2] = useState({});
  const [videoInfoGenres1, setVideoInfoGenres1] = useState([]);
  const [productionComp, setProductionComp] = useState([]);
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [Info2] = await Promise.all([
        // backend
        // theMovieDB.get(`/movie/${videoInfoID2.id}`)
        // api
        theMovieDB.get(`/movie/${videoInfoID2.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);
      setVideoInfo2(Info2.data);
      setVideoInfoGenres1(Info2.data.genres);
      setProductionComp(Info2.data.production_companies[0]);
      setLanguage(Info2.data.spoken_languages[0]);
    };

    fetchData();
  }, [videoInfoID2.id]);

  const closeWindowHandler = (e) => {
    setMoreInfo(!moreInfo);
  };

  return (
    <div
      className={moreInfo ? "movieInfo-container" : "movieInfo-hide"}
      onClick={closeWindowHandler}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="movieInfo animation"
      >
        <VideoPreview fanArt2={fanArt2} videoPrev2={videoPrev2} />
        <VideoPreviewText
          videoInfo={videoInfo}
          videoInfo2={videoInfo2}
          videoInfoGenres1={videoInfoGenres1}
          productionComp={productionComp}
          language={language}
        />
      </div>
    </div>
  );
};

export default MovieInfo;
