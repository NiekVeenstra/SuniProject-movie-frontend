import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import theMovieDB from "../../../../apis/theMovieDB";
import { Context } from "../../../../Context/Context";

const MovieLaneCard = ({ backdropPath, id }) => {
  const [videoInfo, setVideoInfo] = useState({});
  const [videoInfoGenres1, setVideoInfoGenres1] = useState([]);
  const [videoInfoGenres2, setVideoInfoGenres2] = useState([]);
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [mute, setMute] = useState(true);
  const [preview, setPreview] = useState([]);
  const { setPlayMovie } = useContext(Context);
  const { movieInfo, setMovieInfo } = useContext(Context);
  const { movieInfoAbout, setMovieInfoAbout } = useContext(Context);
  const { movieInfoVideo, setMovieInfoVideo } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const [Info, preview] = await Promise.all([
        // backend
        // theMovieDB.get(`/movie/${videoInfoID2.id}`)
        // api
        theMovieDB.get(`/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
        theMovieDB.get(`/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);
      setVideoInfo(Info.data);
      setVideoInfoGenres1(Info.data.genres[0]);
      setVideoInfoGenres2(Info.data.genres[1]);
      // setProductionComp(Info2.data.production_companies[0]);
      // setLanguage(Info2.data.spoken_languages[0]);
      // console.log(Info.data);
      setPreview(preview.data.results[0]);
      // setPlayMovie(preview.data.results[0])
    };

    fetchData();
  }, [id]);

  const mouseEnter = () => {
    setTimeout(() => {
      setHover(true);
    }, 500);
    setHover2(true);
  };

  const mouseLeave = () => {
    setHover(false);
    setHover2(false);
  };

  const infoClickHandler = () => {
    setMovieInfoAbout(videoInfo);
    setMovieInfoVideo(preview);
  };

  return (
    <div
      className="movieLaneCard"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={infoClickHandler}
    >
      <div className="movieLaneCard__movieImage">
        {hover ? (
          <ReactPlayer
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
            url={`https://www.youtube.com/watch?v=${preview ? preview.key : "dQw4w9WgXcQ"}`}
            // url={`https://www.youtube.com/watch?v=Efj-XKwuprE&t=2120s&ab_channel=ADDICTED`}
          ></ReactPlayer>
        ) : (
          <img className="movieLaneCard__img" src={backdropPath} alt="" />
        )}
      </div>
      {hover2 && (
        <div className="movieLaneCard__bottomInfo">
          <div>
            <button style={{ cursor: "pointer" }}>
              <i className="far fa-thumbs-up"></i>
            </button>
            <Link to="/watch-movie">
              <button
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPlayMovie(preview);
                }}
              >
                <i class="fas fa-play"></i>
              </button>
            </Link>
            <button style={{ cursor: "pointer" }}>
              <i className="far fa-thumbs-down"></i>
            </button>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                setMovieInfo(!movieInfo);
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
          <div style={{ color: "white" }}>
            <p>{videoInfo.runtime}min</p>
          </div>
          <div style={{ display: "flex", color: "white" }}>
            {videoInfo.genres.map((genre) => `${genre.name}, `)}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieLaneCard;
