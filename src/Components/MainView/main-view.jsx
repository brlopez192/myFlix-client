import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../SignupView/signup-view";
import { useEffect } from "react";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://movieflixapp-88791d8c1b4d.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            Image: movie.image,
            description: movie.description,
            director: movie.director,
            Genre: movie.Genre,
          };
        });

        setMovies(moviesFromApi);
      });
    }, [token]);

    if (!user) {
      return (
        <>
          <LoginView onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }} />
          or
          <SignupView />
        </>
      );
    }

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
      <button onClick={() => {setUser(null); setToken(null); localStorage.clear(); }}>LogOut</button>
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