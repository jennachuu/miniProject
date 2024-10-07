// NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick(); 
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">J-MOVIE</Link>
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="영화 검색"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} 
        />
        <button onClick={handleSearchClick}>검색</button> 
      </div>
      <div className="navbar-buttons">
        <Link to="/signup" className="btn">회원가입</Link>
        <Link to="/login" className="btn">로그인</Link>
      </div>
    </nav>
  );
};

export default NavBar;
