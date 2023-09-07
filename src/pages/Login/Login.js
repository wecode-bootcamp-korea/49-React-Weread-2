import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/images/Logo.png";
import name from "../../assets/images/logo_wecode.png";
import { Link, useNavigate }  from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();
  const goToMain = () => {navigate("/main")}

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  
  const saveUserId = (event) =>{setUserId(event.target.value)};
  const saveUserPw = (event) =>{setUserPw(event.target.value)};

  const activeButton = userId.includes('@') && userPw.length >= 5;
  console.log(userId.includes('@'));

  return (
    <div className="login">
        <form>
          <fieldset>
            <header className="login_logo">
              <img src={logo} alt="wecodeLogo" />
              <img src={name} alt="nameLogo" />
            </header>
          
            <section className="login_form">
              <input type="text" placeholder="이메일" className="mail" onChange={saveUserId} required/>
              <input type="password" placeholder="비밀번호" className="password" onChange={saveUserPw} required/>
              <button 
                      type="button" 
                      onClick={goToMain} 
                      style={{ backgroundColor: activeButton ? "" : "gray" }} 
                      disabled = {!activeButton}>  
                <span>로그인</span>
              </button>
            </section>          

            <ul className="search">
              <li><Link to="/main">회원가입</Link></li>
              <li> 비밀번호 찾기</li>
            </ul>
          </fieldset>

        </form>
    </div>
  );
};

export default Login;
