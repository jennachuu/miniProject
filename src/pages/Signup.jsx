// Signup.jsx
import React, { useState } from 'react'; 
import '../css/Signup.css'; 

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    password: '', 
    confirmPassword: '' 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
  };

  return (
    <div className="signup">
      <div className="signup-container"> 
        <h2>회원가입</h2> 
        
        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit} className="signup-form">
          
          {/* 이름 입력 필드 */}
          <div className="form-group">
            <label htmlFor="name">이름</label> 
            <input
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>


          <div className="form-group">
            <label htmlFor="email">이메일</label> 
            <input
              type="email"
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              required 
            />
          </div>


          <div className="form-group">
            <label htmlFor="password">비밀번호</label> 
            <input
              type="password"
              id="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange} 
              required 
            />
          </div>


          <div className="form-group">
            <label htmlFor="confirmPassword">비밀번호 확인</label> 
            <input
              type="password" 
              id="confirmPassword" 
              name="confirmPassword" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required
            />
          </div>

          <button type="submit" className="signup-button">회원가입</button> 
        </form>
      </div>
    </div>
  );
};

export default Signup;
