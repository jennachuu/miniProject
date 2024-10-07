// MovieCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const MovieCard = ({ id, title, posterPath, voteAverage }) => {
  

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500"; 


  const navigate = useNavigate(); 


  const handleCardClick = () => {
    navigate(`/details/${id}`); 
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
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

