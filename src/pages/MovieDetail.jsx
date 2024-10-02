//MovieDetail.jsx
import React, { useState } from 'react';
import movieDetailData from '../assets/data/movieDetailData.json'; 

const MovieDetail = () => {
  const [movie, setMovie] = useState(movieDetailData); 
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; 

  return (
    <div className="movie-detail">
      <div className="movie-detail-poster">
        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-detail-info">
        <div className="movie-detail-header">
          <h2 className="movie-title">{movie.title}</h2>
          <p className="movie-rating">평점: {movie.vote_average}</p>
        </div>
        <div className="movie-genres">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="genre">{genre.name}</span>
          ))}
        </div>
        <div className="movie-overview">
          <h3>줄거리</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
      </div>
  );
};

export default MovieDetail;
