import React from "react";
import {Button, Card} from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};