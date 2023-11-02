import React, { useEffect, useState } from "react";
import "./Movies.css"; 

const API_URL = `http://www.omdbapi.com/?apikey=7c78daf9&s=spider man`;

const Movies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setMovies(data.Search);
        setIsLoading(false);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: "An error occurred while fetching data.",
      });
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError.show) {
    return <div>Error: {isError.msg}</div>;
  }

  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <a key={movie.imdbID} href={"movies/" + movie.imdbID + "?title=" + movie.Title} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Movies;
