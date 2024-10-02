//MovieList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import MovieCard from './MovieCard'; // MovieCard 컴포넌트 import
import movieListData from '../data/movieListData.json'; // 더미 데이터 import
import '../App.css';

const MovieList = () => {
  const [movies] = useState(movieListData.results || []);
  const navigate = useNavigate();

  // MovieCard 클릭 시 /details 경로로 이동
  const handleCardClick = () => {
    navigate('/details'); // /details 경로로 이동
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