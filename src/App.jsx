import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import Signup from './pages/Signup'; // 회원가입 페이지 import
import Login from './pages/Login'; // 로그인 페이지 import
import NavBar from './components/NavBar';
import './css/Signup.css'
import './css/Login.css'
import './css/MovieList.css'
import './css/MovieDetail.css'
// import './App.css';

const App = () => {
  return (
    <>
      <NavBar /> {/* NavBar 컴포넌트 */}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/details/:id" element={<MovieDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
