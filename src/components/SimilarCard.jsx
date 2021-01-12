import React from "react";

export default function SimilarCard(props) {
  return (
    <div className="similar-movie">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        className="movie-img"
      />
      <div className="name-imdb">
        <div className="name" />
        <div className="movie-imdb" />
      </div>
    </div>
  );
}
