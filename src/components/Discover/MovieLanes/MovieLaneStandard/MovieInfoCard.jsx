import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import moviedb from "../../../../apis/theMovieDB";
import { Context } from "../../../../Context/Context";
import MovieInfoVideoPreviewPlayPanel from "./MovieInfoVideoPreviewPlayPanel";
import MovieInfoVideoPreviewText from "./MovieInfoVideoPreviewText";

const MovieInfoCard = () => {
  const { movieInfo, setMovieInfo } = useContext(Context);
  const { movieInfoAbout } = useContext(Context);
  const { movieInfoVideo } = useContext(Context);
  const [fanArt2, setFanArt2] = useState(false);
  const [mute, setMute] = useState(true);
  const [movieAllInfo, setMovieAllInfo] = useState(false);

  const [preview, setPreview] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [movieFanArt, preview, allInfo] = await Promise.all([
        moviedb.get(
          `http://webservice.fanart.tv/v3/movies/${movieInfoAbout.id}?api_key=00c655f5cf699862386184d892b7378f`
        ),
        moviedb.get(
          `/movie/${movieInfoAbout.id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
        ),
        moviedb.get(`/movie/${movieInfoAbout.id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);
      setFanArt2(movieFanArt);
      setPreview(preview.data.results[0]);

      setMovieAllInfo(allInfo.data);
    };

    fetchData();
  }, [movieInfoAbout.id]);

  const closeWindowHandler = (e) => {
    setMovieInfo(!movieInfo);
  };
  return (
    <div
      className={movieInfo ? "movieInfoCard-outer" : "movieInfoCard-hidden"}
      onClick={closeWindowHandler}
    >
      <div className="movieInfoCard animation2" onClick={(e) => e.stopPropagation()}>
        {/*  */}
        <div className="videoPreview">
          <div className="videoPreview__container">
            <ReactPlayer
              className="videoPreview__player"
              width="100%"
              height="100%"
              playing={true}
              muted={mute}
              controls={false}
              loop={true}
              // backend
              // url={videoPrev2.key}
              // api
              url={`https://www.youtube.com/watch?v=${
                movieInfoVideo ? movieInfoVideo.key : "dQw4w9WgXcQ"
              }`}
            ></ReactPlayer>
            <button className="videoPreview__close-window" onClick={() => setMovieInfo(!movieInfo)}>
              <strong>X</strong>
            </button>
            <MovieInfoVideoPreviewPlayPanel fanArt2={fanArt2 ? fanArt2.data.hdmovielogo[0].url : "https://assets.fanart.tv/fanart/movies/34433/hdmovielogo/dragon-ball-z-broly---the-legendary-super-saiyan-5c474d7db8da4.png"} preview={preview} />

            <button className="preview__button-sound2" onClick={() => setMute(!mute)}>
              <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
            </button>
          </div>
        </div>
        {/*  */}
        <MovieInfoVideoPreviewText movieAllInfo={movieAllInfo} />
      </div>
    </div>
  );
};

export default MovieInfoCard;
