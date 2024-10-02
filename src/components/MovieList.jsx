//MovieList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import MovieCard from './MovieCard'; 
import movieListData from '../data/movieListData.json'; 
import '../App.css';

const MovieList = () => {
  const [movies] = useState(movieListData.results || []);
  const navigate = useNavigate();

  
  const handleCardClick = () => {
    navigate('/details'); 
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} onClick={handleCardClick}>
          <MovieCard
            title={movie.title}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;