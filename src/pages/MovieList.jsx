
// MovieList.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../css/MovieList.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    // TMDb API 호출
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results); 
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, [apiKey]);

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id} 
          title={movie.title}
          posterPath={movie.poster_path}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>
  );
};

export default MovieList;
