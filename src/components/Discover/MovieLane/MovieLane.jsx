import React, { useEffect, useState } from "react";
import moviedb from "../../../apis/theMovieDB";
import MovieLaneCard from "./MovieLaneCard";

const MovieLane = () => {
  const [videoInfo, setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let n=0;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movies] = await Promise.all([
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);

      // setBackdrop(movie.data.results[0].backdrop_path);
      setVideoInfo(movies.data.results);

      setIsLoading(false);
      console.log(movies.data);
    };

    fetchData();
  }, []);
  return (
    <div className="movieLane">
      {videoInfo.slice(0, 9).map((movie) => (
        <MovieLaneCard
          nr={n+=1}
          key={movie.title}
          backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          posterPath={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          name={movie.title}
        />
      ))}
    </div>
  );
};

// backdrop={`https://image.tmdb.org/t/p/original/${backdrop}`}

export default MovieLane;
