import React from "react";
import "./Login.css";
import logo from "../../assets/images/Logo.png";
import name from "../../assets/images/logo_wecode.png";

const Login = () => {
  return (
    <div className="login">
      <div>로그인페이지</div>
        <body>

          <div class="login_logo">
            <img src={logo} alt="wecodeLogo" class="logo1" />
            <img src={name} alt="nameLogo" class="logo2" />
          </div>
          
          <div class="login_form">

            <div class="login_data">
              <input id="id" type="text" placeholder="이메일" /><br />
              <input id="password" type="password" placeholder="비밀번호" />
            </div>

            <button id="button" type="button"> 
              <span>로그인</span>
            </button>

            <div class="search">
              <a class="join" href=""> 회원가입</a>
            
              <div></div>
            
              <a class="pw" href=""> 비밀번호 찾기</a>
            </div>

          </div>
          
        </body>
    </div>
  );
};

export default Login;
