import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../SignupView/signup-view";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

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
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie.id,
            title: movie.title,
            description: movie.description,
            director: movie.director,
            genre: movie.genre,
          };
        });
  
        setMovies(moviesFromApi);
      });
  }, [token]);
  

  return (
    <BrowserRouter>
    <Row className="justify-content-md-center"> 
      <Routes>
        <Route
          path="/signup"
          element={
            <>
            {!user ? (
              <navitgate to="/" />
            ) : (
              <Col md={5}>
                <SignupView />
                </Col>
            )}
            </>
          }
          />
          <Route
          path="/login"
          element={
            <>
            {user ? (
              <Navigate to="/" />
            ) : (
              <Col md={5}>
                <LoginView onLoggedIn={(user) => setUser(user)} />
                </Col>
            )}
            </>
          }
          />
          <Route
          path="/movies/:movieId"
          element={
            <>
            {!user ? (
              <Navigate to="/login" replace /> 
            ) : movies.length === 0 ? (
              <Col> The list is empty!</Col>
            ) : (
              <Col md={8}>
                <MovieView movie = {movies} />
                  </Col>
              )}
          </>
          }
        />
        <Route
          path="/"
          element={
            <>
            {!user ? (
              <Navigate to="/login" replace />
            ) : movies.length === 0 ? (
              <Col>The list is empty!</Col>
            ) : (
              <>
              {movies.map((movie) => (
                <Col className="mb-4" key = {movie.id} md={3}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
              </>
            )}
            </>
          }
        />
      </Routes>
    </Row>
    </BrowserRouter>
  );
};

//       {!user ? (
//         <Col md={5}>
//           <LoginView onLoggedIn={(user) => setUser(user)} />
//             or
//             <SignupView />
//         </Col>
//       ) : selectedMovie ? (
//         <Col md={8} style={{border:"1px solid black"}}>
//           <MovieView 
//           style={{border:"1px solid green"}}
//             movie={selectedMovie} 
//             onBackClick={() => setSelectedMovie(null)} 
//         />
//         </Col>
//       ) : movies.length === 0 ? (
//         <div>The list is empty!</div>
//       ) : (
//         <>
//           {movies.map((movie) => (
//             <Col className="mb-5" key={movie.id} md={3}>
//               <MovieCard
//               movie={movie}
//               onMovieClick={(newSelectedMovie) => {
//                 selectedMovie(newSelectedMovie);
//               }}
//             />
//             </Col>
//           ))}
//         </>
//       )}
//     </Row>
// );
// };