import React, { useEffect, useState } from "react";
import moviedb from "../../../../apis/theMovieDB";
import MovieLaneCardTop9 from "./MovieLaneCardTop9";

const MovieLaneTop9 = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let n = 0;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movies] = await Promise.all([
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);

      // setBackdrop(movie.data.results[0].backdrop_path);
      setVideoInfo(movies.data.results);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  // window.addEventListener("resize", function () {
  //   let screenwidth = document.body.clientWidth;
  //   return screenwidth;
  // });

  // const horizontalScrollHandlerLeft = () => {
  //   // console.log(e);
  //   document.getElementById("movieLane").scrollLeft -= 1000;
  // };
  // const horizontalScrollHandlerRight = () => {
  //   // console.log(e);
  //   document.getElementById("movieLane").scrollLeft += 1000;
  // };

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
    document.getElementById("movieLaneTop9").scrollLeft -= width / 2;
  };
  const horizontalScrollHandlerRight = () => {
    document.getElementById("movieLaneTop9").scrollLeft += width / 2;
  };

  return (
    <div className="movieLane-outer-Top9">
      <button
        onClick={horizontalScrollHandlerLeft}
        className="movieLane-outer-Top9__button movieLane-outer-Top9__button-back"
      >
        <i class="fas fa-angle-left"></i>
      </button>
      <div className="movieLaneTop9" id="movieLaneTop9">
        {videoInfo.slice(0, 9).map((movie) => (
          <MovieLaneCardTop9
            nr={(n += 1)}
            key={movie.title}
            backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            posterPath={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            name={movie.title}
          />
        ))}
      </div>
      <button
        onClick={horizontalScrollHandlerRight}
        className="movieLane-outer-Top9__button movieLane-outer-Top9__button-forth"
      >
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default MovieLaneTop9;
