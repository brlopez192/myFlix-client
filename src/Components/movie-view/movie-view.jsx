import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./movie-view.scss";


export const MovieView = ({ movie }) => {
  const { movieId } = useParams();

  const movie = movies.find((m) => m._id === movieId);

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
      <Link to={`/`}>
      <button onClick={onMovieClick}
      className="back-button"
      style={{cursor: "pointer"}}
      >Back</button>
      </Link>
    </div>
  );
};

  