// MovieDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import '../css/MovieDetail.css';

const MovieDetail = () => {

  const { id } = useParams(); 


  const [movie, setMovie] = useState(null); 


  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`)
      .then((response) => response.json()) 
      .then((data) => {
        setMovie(data); 
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });

  }, [id, apiKey]);


  if (!movie) {
    return <div>Loading...</div>; 
  }


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
