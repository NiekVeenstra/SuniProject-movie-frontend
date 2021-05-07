import React, { useEffect, useState } from "react";
import moviedb from "../../../apis/theMovieDB";
import MovieLaneCard from "./MovieLaneCard";

const MovieLane = () => {
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

  window.addEventListener("resize", function () {
    let screenwidth = document.body.clientWidth;
    return screenwidth;
  });

  const horizontalScrollHandlerLeft = () => {
    // console.log(e);
    document.getElementById("movieLane").scrollLeft -= 1000;
  };
  const horizontalScrollHandlerRight = () => {
    // console.log(e);
    document.getElementById("movieLane").scrollLeft += 1000;
  };

  return (
    <div className="movieLane-outer">
      <button onClick={horizontalScrollHandlerLeft} style={{ height: "10%" }}>
        left
      </button>
      <div className="movieLane" id="movieLane">
        {videoInfo.slice(0, 9).map((movie) => (
          <MovieLaneCard
            nr={(n += 1)}
            key={movie.title}
            backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            posterPath={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            name={movie.title}
          />
        ))}
      </div>
      <button onClick={horizontalScrollHandlerRight} style={{ height: "10%" }}>
        right
      </button>
    </div>
  );
};

// backdrop={`https://image.tmdb.org/t/p/original/${backdrop}`}

export default MovieLane;
