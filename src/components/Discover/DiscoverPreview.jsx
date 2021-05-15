import React, { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player/youtube";
import moviedb from "../../apis/theMovieDB";
import { Context } from "../../Context/Context";
import MovieCard from "./MovieCard";
import MovieInfo from "./MovieInfo/MovieInfo";

const DiscoverPreview = () => {
  const [mute, setMute] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [backdrop, setBackdrop] = useState("");
  const [videoInfo, setVideoInfo] = useState("");
  const [videoInfoID2, setVideoInfoID2] = useState("");
  const [videoPrev2, setVideoPrev2] = useState("");
  const [fanArt2, setFanArt2] = useState("");

  const { setPlayVideo } = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movie] = await Promise.all([
        // backend
        // moviedb.get(`/discover/movie`),
        // api
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);

      setBackdrop(movie.data.results[0]);
      setVideoInfo(movie.data.results[0]);
      setVideoInfoID2(movie.data.results[0]);
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const [videoPrev, fanArt] = await Promise.all([
        // backend
        // moviedb.get(`/movie/${videoInfoID2.id}/videos`),
        // api
        moviedb.get(
          `/movie/${videoInfoID2.id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        ),
        moviedb.get(
          `http://webservice.fanart.tv/v3/movies/${videoInfoID2.id}?api_key=00c655f5cf699862386184d892b7378f`
        ),
      ]);
      // backend
      // setVideoPrev2(videoPrev.data[1].href);
      // setPlayVideo(videoPrev.data[1].href);
      // api
      setVideoPrev2(videoPrev.data.results[0]);
      setPlayVideo(videoPrev.data.results[0]);
      setFanArt2(fanArt.data.hdmovielogo[0]);
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
          <MovieCard videoInfo={videoInfo} fanArt2={fanArt2} />
          <MovieInfo
            videoInfo={videoInfo}
            videoInfoID2={videoInfoID2}
            fanArt2={fanArt2}
            videoPrev2={videoPrev2}
          />
        </div>
      );
    }
    return (
      <div className="preview">
        <MovieInfo
          videoInfo={videoInfo}
          videoInfoID2={videoInfoID2}
          fanArt2={fanArt2}
          videoPrev2={videoPrev2}
        />
        <ReactPlayer
          className="preview__player"
          width="100%"
          height="100%"
          playing={true}
          muted={mute}
          controls={false}
          loop={true}
          // backend
          // url={videoPrev2}
          // api
          url={`https://www.youtube.com/watch?v=${videoPrev2.key}`}
        ></ReactPlayer>
        <MovieCard videoInfo={videoInfo} fanArt2={fanArt2} />
        <button className="preview__button-sound" onClick={() => setMute(!mute)}>
          <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
        </button>
      </div>
    );
  };

  return renderData();
};

export default DiscoverPreview;
