import React, { useEffect, useState } from "react";
import moviedb from "../../../apis/theMovieDB";
import MovieLaneCard from "./MovieLaneCard";


const MovieLane = () => {
    const [backdrop, setBackdrop] = useState({});
    const [videoInfo, setVideoInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [movie] = await Promise.all([
        moviedb.get(`/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`),
      ]);
      console.log(movie);

      setBackdrop(movie.data.results[0].backdrop_path);
      setVideoInfo(movie.data.results[0]);

      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="movieLane">
      <MovieLaneCard backdrop={`https://image.tmdb.org/t/p/original/${backdrop}`}/>
    </div>
  );
};

export default MovieLane;
