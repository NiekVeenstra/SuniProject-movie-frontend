import React, { useEffect, useState } from "react";
import moviedb from "../../../apis/theMovieDB";
import MovieLaneCard from "./MovieLaneCard";

const MovieLane = () => {
  const [backdrop, setBackdrop] = useState({});
  const [videoInfo, setVideoInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movies] = await Promise.all([
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);

      // setBackdrop(movie.data.results[0].backdrop_path);
      setVideoInfo(movies.data.results);

      setIsLoading(false);
      console.log(movies.data.results);
    };

    fetchData();
  }, []);
  return (
    <div className="movieLane">
      {videoInfo.map((movie) => (
        <MovieLaneCard 
          key={movie.title}
          backdropPath={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          name={movie.title}
        />
      ))}
    </div>
  );
};

// backdrop={`https://image.tmdb.org/t/p/original/${backdrop}`}

export default MovieLane;
