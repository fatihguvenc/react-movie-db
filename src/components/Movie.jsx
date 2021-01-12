import React from "react";
import {Link} from "react-router-dom"

export default function Movie(props) {
  const {
    id,
    title,
    poster_path,
    overview,
    release_date,
    vote_average
  } = props.movie;

  return (
    <div className="col-8 movie-card mx-auto mt-4 p-4">
      <div className="d-flex">
      <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="movie-img" alt="" /></Link>
        <div className="movie-detail d-flex flex-column justify-content-center">
          <div className="title-imdb d-flex justify-content-between">
            <Link to ={`/movie/${id}`}><h4 className="movie-title">{title}</h4></Link>
            <h6 className="movie-imdb">imdb {vote_average}</h6>
          </div>
          <h6 className="movie-language">{release_date}</h6>
          <p className="movie-overview">{overview}</p>
        </div>
      </div>
    </div>
  );
}
