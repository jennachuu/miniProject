// App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { searchMovies } from './api'; // API 호출 함수
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import './css/Signup.css';
import './css/Login.css';
import './css/MovieList.css';
import './css/MovieDetail.css';

const App = () => {
  const [movies, setMovies] = useState([]); 

  const handleSearch = (searchTerm) => {

    searchMovies(searchTerm).then((results) => {
      setMovies(results); 
    });
  };

  return (
    <>
      <NavBar onSearch={handleSearch} /> 
      <Routes>
        <Route
          path="/"
          element={<MovieList movies={movies} />}
        />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
