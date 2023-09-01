import React from "react";
import "./Login.scss";
import mainLogo from "../../assets/img/Logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

  const Navigate = useNavigate();

  const LoginBtn = () => {
    Navigate('/Main');
  }

  return (
    <div className="login">

      <div className="loginSplash">
        {/* <img className="logo" src="img/Logo.png" alt="logo" /> */}
        <img className="logo" src={mainLogo} alt="logo" />
        <img className="logo_wecode" src="img/logo_wecode.png" alt="Logo2" />
      </div> 

      <div className="loginContainer">

        <div class="input">
          <input className="textInput_lv1" type="text" placeholder="이메일" />
          <input className="textInput_lv1" type="password" placeholder="비밀번호" />
        </div>

        <button className="buttonFill" onClick={LoginBtn}>
          <span>로그인</span>
        </button>

        <div className="loginOption">
          <Link to="/Main">회원 가입</Link> 
          <div />
          <Link to='/'>비밀번호 찾기</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Login;
