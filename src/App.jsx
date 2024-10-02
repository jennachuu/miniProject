import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList'; 
import MovieDetail from './pages/MovieDetail'; 
import './App.css';

const App = () => {
  return (
    <Routes>
      {/* 메인 페이지 */}
      <Route path="/" element={<MovieList />} />
      
      {/* 상세 페이지 */}
      <Route path="/details" element={<MovieDetail />} />
    </Routes>
  );
};

export default App;
