import React from "react";

export const MovieView = ({ movie, onMovieClick }) => {
  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (
    <div>
      <div>
        <span>Title: </span>
        <span>{movie.title}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.genre}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.director}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.description}</span>
      </div>
      <button onClick={onMovieClick}>Back</button>
    </div>
  );
};

  