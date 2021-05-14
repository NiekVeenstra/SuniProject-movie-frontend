import React, { useContext, useEffect, useState } from "react";
import theMovieDB from "../../../../apis/theMovieDB";
import { Context } from "../../../../Context/Context";
import VideoPreviewLane from "./VideoPreviewLane";
import VideoPreviewLaneText from "./VideoPreviewLaneText";

const MovieLaneCardInfo = ({ videoInfo, videoInfoID2, fanArt2, videoPrev2 }) => {
    const { moreInfo, setMoreInfo } = useContext(Context);
    const [videoInfo3, setVideoInfo3] = useState({});
    const [videoInfoGenres1, setVideoInfoGenres1] = useState([]);
    const [videoInfoGenres2, setVideoInfoGenres2] = useState([]);
    // const [productionComp, setProductionComp] = useState([]);
    // const [language, setLanguage] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const [Info3] = await Promise.all([
                // backend
                // theMovieDB.get(`/movie/${videoInfoID2.id}`)
                // api
                theMovieDB.get(`/movie/${videoInfoID2.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
            ]);
            setVideoInfo3(Info3.data);
            setVideoInfoGenres1(Info3.data.genres[0]);
            setVideoInfoGenres2(Info3.data.genres[1]);
            // setProductionComp(Info2.data.production_companies[0]);
            // setLanguage(Info2.data.spoken_languages[0]);
        };

        fetchData();
    }, [videoInfoID2.id]);

    return (
        <div className="movieInfoLane">
            <VideoPreviewLane fanArt2={fanArt2} videoPrev2={videoPrev2} />
            <VideoPreviewLaneText
                videoInfo={videoInfo}
                videoInfo3={videoInfo3}
                videoInfoGenres1={videoInfoGenres1}
                videoInfoGenres2={videoInfoGenres2}
            />
        </div>

    );
};

export default MovieLaneCardInfo;
