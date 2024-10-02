// MovieCard.jsx
import React from 'react';

const MovieCard = ({ title, posterPath, voteAverage }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img src={`${imageBaseUrl}${posterPath}`} alt={title} />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">평점: {voteAverage}</p>
      </div>
    </div>
  );
};

export default MovieCard;

