import React, { useEffect, useState } from "react";
import moviedb from "../../../../apis/theMovieDB";
import MovieLaneCard from "../MovieLaneStandard/MovieLaneCard";

const MovieLane = ({ genreName, genre, idd }) => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [videoInfo2, setVideoInfo2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let n = 0;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movies, movies2] = await Promise.all([
        moviedb.get(
          `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&${genre}&page=1`
        ),
        moviedb.get(
          `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&${genre}&page=2`
        ),
      ]);
      // console.log(movies.data);
      // setBackdrop(movie.data.results[0].backdrop_path);
      setVideoInfo(movies.data.results);
      setVideoInfo2(movies2.data.results);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getWidth = () =>
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth());
    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      const resizeListener = () => {
        // change width from the state object
        setWidth(getWidth());
      };
      // set resize listener
      window.addEventListener("resize", resizeListener);

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener("resize", resizeListener);
      };
    }, []);

    return width;
  }
  let width = useCurrentWidth();

  const horizontalScrollHandlerLeft = () => {
    document.getElementById(`movieLane${idd}`).scrollLeft -= width / 2;
  };
  const horizontalScrollHandlerRight = () => {
    document.getElementById(`movieLane${idd}`).scrollLeft += width / 2;
  };

  return (
    <div className="movieLane-outer">
      <button
        onClick={horizontalScrollHandlerLeft}
        className="movieLane-outer__button movieLane-outer__button-back"
      >
        <i class="fas fa-angle-left"></i>
      </button>
      <div className="movieLane-inner">
        <h1 style={{ color: "white" }}>{genreName}</h1>
        <div className="movieLane" id={`movieLane${idd}`}>
          {videoInfo.slice(0, 20).map((movie) => (
            <MovieLaneCard
              backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              name={movie.title}
              id={movie.id}
              idd={idd}
            />
          ))}
          {videoInfo2.slice(0, 20).map((movie) => (
            <MovieLaneCard
              backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              name={movie.title}
              id={movie.id}
            />
          ))}
        </div>
      </div>
      <button
        onClick={horizontalScrollHandlerRight}
        className="movieLane-outer__button movieLane-outer__button-forth"
      >
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default MovieLane;
