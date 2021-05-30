import React, { useContext, useEffect, useState } from "react";
import moviedb from "../../apis/theMovieDB";
import { Context } from "../../Context/Context";
import MovieCardKnownFor from "./MovieCardKnownFor";

const SearchResult = () => {
  const { inputSearch } = useContext(Context);
  const { inputSearchResultPage, setInputSearchResultPage } = useContext(Context);

  const [knownFor, setKnownFor] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const [movieActor] = await Promise.all([
        moviedb.get(
          `https://api.themoviedb.org/3/search/person?api_key=43adde1f22cb5d9f3d7d5852fa42e5e6&language=en-US&query=Brad+Pitt`
        ),
      ]);
      setKnownFor(movieActor.data.results[0])
    };

    fetchData();
  }, []);


  return (
    <>
      {inputSearchResultPage && (
        <div className="searchResultPage">
          {knownFor.known_for.map((movies) => (
              <MovieCardKnownFor backdrop={movies.backdrop_path}/>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResult;
