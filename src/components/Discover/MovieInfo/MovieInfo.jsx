import React, { useContext, useEffect, useState } from "react";
import theMovieDB from "../../../apis/theMovieDB";
import { Context } from "../../../Context/Context";
import VideoPreview from "./VideoPreview";
import VideoPreviewText from "./VideoPreviewText";

const MovieInfo = ({ videoInfo }) => {
  const { moreInfo, setMoreInfo } = useContext(Context);
  const { videoInfoID, setVideoInfoID } = useContext(Context);
  const [videoInfo2, setVideoInfo2] = useState({});
  const [videoInfoGenres1, setVideoInfoGenres1] = useState([]);
  const [videoInfoGenres2, setVideoInfoGenres2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const [Info2] = await Promise.all([theMovieDB.get(`/movie/${videoInfoID}`)]);
      // console.log(Info2);
      setVideoInfo2(Info2.data);
      setVideoInfoGenres1(Info2.data.genres[0]);
      setVideoInfoGenres2(Info2.data.genres[1]);
    };

    fetchData();
  }, []);

  return (
    <div className={moreInfo ? "movieInfo" : "movieInfo-hide"}>
      <VideoPreview />
      <VideoPreviewText
        videoInfo={videoInfo}
        videoInfo2={videoInfo2}
        videoInfoGenres1={videoInfoGenres1}
        videoInfoGenres2={videoInfoGenres2}
      />
      {/* {console.log(videoInfo2)} */}
    </div>
  );
};

export default MovieInfo;
