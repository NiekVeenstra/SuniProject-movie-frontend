import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import moviedb from "../../apis/theMovieDB";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo/MovieInfo";

const DiscoverPreview = () => {
  const [mute, setMute] = useState(true);
  const [backdrop, setBackdrop] = useState({});
  const [videoInfo, setVideoInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movie] = await Promise.all([
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);
      console.log(movie.data.results);

      setBackdrop(movie.data.results[0].backdrop_path);
      setVideoInfo(movie.data.results[0]);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return (
        <div className="preview">
          <img
            className="preview__backdrop-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop}`}
            alt=""
          />
          <MovieCard videoInfo={videoInfo} />
          <MovieInfo />
        </div>
      );
    }
    return (
      <div className="preview">
        <MovieInfo />
        <ReactPlayer
          className="preview__player"
          width="100%"
          height="100%"
          playing={true}
          muted={mute}
          controls={false}
          loop={true}
          url="https://www.youtube.com/embed/odM92ap8_c0"
        ></ReactPlayer>
        <MovieCard videoInfo={videoInfo} />
        <button className="preview__button-sound" onClick={() => setMute(!mute)}>
          <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
        </button>
      </div>
    );
  };

  return renderData();
};

export default DiscoverPreview;
