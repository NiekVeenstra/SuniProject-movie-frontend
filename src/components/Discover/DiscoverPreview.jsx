import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import moviedb from "../../apis/theMovieDB";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo/MovieInfo";

const DiscoverPreview = () => {
  const [mute, setMute] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [backdrop, setBackdrop] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const [videoInfoID2, setVideoInfoID2] = useState("");
  const [videoPrev2, setVideoPrev2] = useState("");
  console.log(videoInfoID2.id);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movie] = await Promise.all([
        moviedb.get(`/discover/movie`),
      ]);
      console.log(movie);

      setBackdrop(movie.data.results[1]);
      setVideoInfo(movie.data.results[1]);
      setVideoInfoID2(movie.data.results[1]);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const [videoPrev] = await Promise.all([moviedb.get(`/movie/${videoInfoID2.id}/videos`)]);

      console.log(videoPrev);

      setVideoPrev2(videoPrev.data[1].href);
    };

    fetchData();
  }, [videoInfoID2.id]);

  const renderData = () => {
    if (isLoading) {
      return (
        <div className="preview">
          <img
            className="preview__backdrop-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop.backdrop_path}`}
            alt=""
          />
          <MovieCard videoInfo={videoInfo} />
          <MovieInfo videoInfo={videoInfo} videoInfoID2={videoInfoID2} />
        </div>
      );
    }
    return (
      <div className="preview">
        <MovieInfo videoInfo={videoInfo} videoInfoID2={videoInfoID2} />
        <ReactPlayer
          className="preview__player"
          width="100%"
          height="100%"
          playing={true}
          muted={mute}
          controls={false}
          loop={true}
          url={videoPrev2}
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
