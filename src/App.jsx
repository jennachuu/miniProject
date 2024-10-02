import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList'; // MovieList import
import MovieDetail from './components/MovieDetail'; // MovieDetail import
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
