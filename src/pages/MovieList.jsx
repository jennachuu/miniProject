import React, { useState, useEffect } from 'react'; 
import MovieCard from '../components/MovieCard'; 
import '../css/MovieList.css'; 

const MovieList = ({ movies }) => {
  const [popularMovies, setPopularMovies] = useState([]); 
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    if (movies.length === 0) { 
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`)
        .then((response) => response.json()) 
        .then((data) => {
          setPopularMovies(data.results);
        })
        .catch((error) => {
          console.error('Error fetching popular movies:', error);
        });
    }
  }, [movies, apiKey]);

  const movieListToDisplay = movies.length > 0 ? movies : popularMovies;

  return (
    <div className="movie-list"> 
      {movieListToDisplay.map((movie) => (
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
