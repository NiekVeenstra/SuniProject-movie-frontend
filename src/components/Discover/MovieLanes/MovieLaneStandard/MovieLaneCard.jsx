import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import theMovieDB from "../../../../apis/theMovieDB";

const MovieLaneCard = ({ backdropPath, id, idd }) => {
  const [videoInfo, setVideoInfo] = useState({});
  const [videoInfoGenres1, setVideoInfoGenres1] = useState([]);
  const [videoInfoGenres2, setVideoInfoGenres2] = useState([]);
  const [hover, setHover] = useState(false);
  const [mute, setMute] = useState(true);
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [Info, preview] = await Promise.all([
        // backend
        // theMovieDB.get(`/movie/${videoInfoID2.id}`)
        // api
        theMovieDB.get(`/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
        theMovieDB.get(
          `/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        ),
      ]);
      setVideoInfo(Info.data);
      setVideoInfoGenres1(Info.data.genres[0]);
      setVideoInfoGenres2(Info.data.genres[1]);
      // setProductionComp(Info2.data.production_companies[0]);
      // setLanguage(Info2.data.spoken_languages[0]);
      console.log(preview.data.results[0]);
      setPreview(preview.data.results[0])
    };

    fetchData();
  }, [id]);

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="movieLaneCard" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <div className="movieLaneCard__movieImage">
        {hover ? <ReactPlayer
          className="movieLaneCard__img"
          width="100%"
          height="100%"
          playing={true}
          muted={mute}
          controls={false}
          loop={true}
          // backend
          // url={videoPrev2.key}
          // api
          url={`https://www.youtube.com/watch?v=${preview.key}`}
          // url={`https://www.youtube.com/watch?v=Efj-XKwuprE&t=2120s&ab_channel=ADDICTED`}
        ></ReactPlayer> : <img className="movieLaneCard__img" src={backdropPath} alt="" />}
      </div>
      {hover && <div className="movieLaneCard__bottomInfo"></div>}
    </div>
  );
};

export default MovieLaneCard;
