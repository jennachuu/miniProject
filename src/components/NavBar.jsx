
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">J-MOVIE</Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/signup" className="btn">회원가입</Link>
        <Link to="/login" className="btn">로그인</Link>
      </div>
    </nav>
  );
};

export default NavBar;

