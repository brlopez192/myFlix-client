import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
        id: 1,
        title: "Inception",
        description: "A skilled thief who enters the dreams of others to steal secres is given a chance to have his past crimes forgiven.",
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        genre: ["Sci-Fi", "Thriller"],
        director: "Christopher Nolan" 

    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        description: "A man wrongly convicted of murder forms an unlikely friendship and plans his escape from prison",
        image: "https://m.media-amazon.com/images/I/717W9DCnyzL._AC_UF894,1000_QL80_.jpg",
        genre: ["Drama"],
        director: "Frank Darabont" 

    },
    {
        id: 3,
        title: "The Dark Knight",
        description: "Batman faces off against the Joker, a criminal mastermind who seeks to plunge Gotham into chaos.",
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        genre: ["Action", "Crime", "Drama"],
        director: "Cristopher Nolan" 

    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onBookClick={(newSelectedMovie) => {
            selectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};