import React, { useState } from "react";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// API
import { API } from "./API/api";
// React Router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleMovie = e => {
    e.preventDefault();
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&include_adult=false&query=${query}`;
    fetch(URL)
      .then(res => res.json())
      .then(data => setMovies(data.results));
  };

  return (
    <Router>
      <nav className="navbar navbar-light dark-navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            searchmovie
          </Link>
          <form className="d-flex">
            <input
              className="form-control form-search me-5 "
              type="search"
              placeholder="Movie, TV Series ?"
              aria-label="Search"
              onChange={e => setQuery(e.target.value)}
            />
            <button
              className="btn btn-outline-success btn-search"
              type="submit"
              onClick={handleMovie}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="row">
              {movies
                .filter(item => item.poster_path)
                .map(item => (
                  <Movie key={item.id} movie={item} />
                ))}
            </div>
          </div>
        </Route>
        <Route path="/movie/:movieID">
          <MovieDetail movies={movies} />
        </Route>
      </Switch>
    </Router>
  );
}
