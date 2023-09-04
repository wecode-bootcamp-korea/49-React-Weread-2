import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/css/common.css";
import "./Login.scss";
import logo from "../../assets/images/login/Logo.png";
import wecodeLogo from "../../assets/images/login/logo_wecode.png";

const Login = () => {
  const navigate = useNavigate();
  const goToMain = ( )=> {
    navigate('/main');
  }

  const saveUserId = (event) => {
    let state = event.target.value;

  }

  const saveUserPw = (event) => {
    let state = event.target.value;
  }

  return (
    <div className="login">
      <header className="login-header">
        <hgroup>
          <h1>
            <img src={logo} alt="로고" />
          </h1>
          <h2>
            <img src={wecodeLogo} alt="위코드 로고" />
          </h2>
        </hgroup>
      </header>
      <main className="main">
        <form className="form">
          <fieldset>
            <legend className="hidden">로그인 양식</legend>
            <div className="input-wrap">
              <label>
                <input type="text" placeholder="이메일" className="input-style"
                  onChange={saveUserId}
                />
              </label>
            </div>
            <div className="input-wrap">
              <label>
                <input type="password" placeholder="비밀번호" className="input-style"
                  onChange={saveUserPw}
                />
              </label>
            </div>
            <Link to="/main" className="btn btn-primary">로그인</Link>
            <button type="button" className="btn btn-primary" onClick={goToMain}>로그인</button>
          </fieldset>
        </form>
        <ul className="option-list">
            <li>
              <a href="{()=>false}">회원 가입</a>
            </li>
            <li>
              <a href="{()=>false}">비밀번호 찾기</a>
            </li>
          </ul>
      </main>
    </div>
  );
};

export default Login;