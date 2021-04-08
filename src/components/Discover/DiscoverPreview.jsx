import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import moviedb from "../../apis/theMovieDB";

const DiscoverPreview = () => {
  const [mute, setMute] = useState(true);
  const MovieName = "test";
  const MovieDescription = "test test test test test test test test test";
  const [backdrop, setBackdrop] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(
  //       // `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_MOVIE_API_KEY}`
  //       // `
  //       // https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
  //       `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
  //     )
  //     .then((res) => {
  //       // console.log(res.data);
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movie] = await Promise.all([
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);
      console.log(movie.data.results[0]);

      setBackdrop(movie.data.results[0].backdrop_path);
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
          <img className="backdrop-img" src={`https://image.tmdb.org/t/p/original/${backdrop}`} alt=""/>
        </div>
      );
    }
    return (
      <div className="preview">
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
        <div>
          <h1>{MovieName}</h1>
          <p>{MovieDescription}</p>
        </div>
        <button onClick={() => setMute(!mute)}>
          <div className={mute ? "sound-img-on sound-img" : "sound-img-off sound-img"} />
        </button>
      </div>
    );
  };

  return renderData();
};

export default DiscoverPreview;
