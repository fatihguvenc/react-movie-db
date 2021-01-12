import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../API/api";
// Components
import SimilarCard from "./SimilarCard";

export default function MovieDeteail(props) {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const { movies } = props;
  const [movie, setMovie] = useState([]);
  const [similar, setSimilar] = useState([]);
  const params = useParams();

  useEffect(() => {
    // Detail
    const URL = `https://api.themoviedb.org/3/movie/${
      params.movieID
    }?api_key=${API}&language=en-US`;
    fetch(URL)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMovie(data);
      });
  }, []);

  useEffect(() => {
    setMovie(
      movies.filter(item => Number(item.id) === Number(params.movieID))[0]
    );
  }, []);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm movie-card p-2">
          <div className="movie-detail">
            <div className="row">
              <div className="col-sm-3 ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                  className="radius-class"
                />
              </div>
              <div className="col-sm-9 d-flex">
                <div className="detail d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between">
                    <div className="name font-color">
                      {movie.title} <span>({movie.release_date})</span>
                    </div>
                    <div className="movie-imdb font-color">
                      imdb {movie.vote_average}
                    </div>
                  </div>
                  <div className="d-flex">
                    {movie.genres &&
                      movie.genres.map((item, index) => (
                        <li className="genres font-color" key={index}>
                          {item.name}
                        </li>
                      ))}
                  </div>
                  <div className="date font-color" />
                  <p className="font-color">{movie.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel">
        <div className="row" />
      </div>
    </div>
  );
}
