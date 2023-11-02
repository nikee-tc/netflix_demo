import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import SearchBar from "./SearchBar";
import { useSearchParams } from "react-router-dom";

const MovieDetails = ({ imdbID }) => {
  const [Movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const queryParams = new URLSearchParams(window.location.search);

  const API_URL = `http://www.omdbapi.com/?apikey=7c78daf9&t=${imdbID}`;

  const handleSearch = (searchText) => {
    console.log("Searched for:", searchText);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setMovie(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movieDetails", error);
      }
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (isLoading) {
    return <div>Loading movie details..</div>;
  }
  if (!Movie) {
    return <div>Movie not found</div>;
  }

  

  return (
    <div className="movie-details">
      <h2 className="movie-title">{queryParams.get("title")}</h2>
      <p className="movie-plot">{Movie.Plot}</p>
      <p>
        <strong>Writer:</strong>
        {Movie.Writer}
      </p>
      <p>
        <strong>Author Name:</strong>
        {Movie.Director}
      </p>
      <p>
        <strong>Actors:</strong>
        {Movie.imdbActors}
      </p>
      <p>
        <strong>Title:</strong>
        {Movie.imdbTitle}
      </p>
      <p>
        <strong>Type:</strong>
        {Movie.imdbType}
      </p>
      <p>
        <strong>Year:</strong>
        {Movie.imdbYear}
      </p>
      <p>
        <strong>Rating:</strong>
        {Movie.imdbRating}
      </p>
      <p>
        <strong>Description:</strong>
        {Movie.Plot}
      </p>

      <SearchBar onSearch={(searchText) => handleSearch(searchText)} />
    </div>
  );
};

export default MovieDetails;
