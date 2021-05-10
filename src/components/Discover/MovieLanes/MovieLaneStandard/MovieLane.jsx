import React, { useEffect, useState } from "react";
import moviedb from "../../../../apis/theMovieDB";
import MovieLaneCard from "../MovieLaneTop9/MovieLaneCardTop9";

const MovieLane = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let n = 0;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movies] = await Promise.all([
        moviedb.get(
          `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`
        ),
      ]);
      console.log(movies.data.results);
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
    document.getElementById("movieLane").scrollLeft -= width / 2;
  };
  const horizontalScrollHandlerRight = () => {
    document.getElementById("movieLane").scrollLeft += width / 2;
  };

  return (
    <div className="movieLane-outer">
      <button
        onClick={horizontalScrollHandlerLeft}
        className="movieLane-outer__button movieLane-outer__button-back"
      >
        <i class="fas fa-angle-left"></i>
      </button>
      <div className="movieLane" id="movieLane">
        {videoInfo.slice(0, 9).map((movie) => (
          <MovieLaneCard />
        ))}
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
