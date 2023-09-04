import React, { useState } from "react";
import "./Login.scss";
import mainLogo from "../../assets/img/Logo.png";
import { Link, useNavigate } from 'react-router-dom';

const Button = (onClick) => {
  return (
    <button className="buttonFill" onClick={onClick}>
      <span>로그인</span>
    </button>
  )
}

const Login = () => {

  const Navigate = useNavigate();
  const [saveUserId, setSaveUserId] = useState("");
  const [saveUserPassword, setSaveUserPassword] = useState("");

  const LoginBtn = () => {
    Navigate('/Main');
  }

  const SaveUserId = (e) => {
    setSaveUserId(e.currentTarget.value);
  }

  const SaveUserPassword = (e) => {
    setSaveUserPassword(e.currentTarget.value);
  }

  console.log(saveUserId.includes('@') && saveUserPassword.length > 5 )

  return (
    <div className="login">

      <div className="loginSplash">
        {/* <img className="logo" src="img/Logo.png" alt="logo" /> */}
        <img className="logo" src={mainLogo} alt="logo" />
        <img className="logo_wecode" src="img/logo_wecode.png" alt="Logo2" />
      </div> 

      <div className="loginContainer">

        <div class="input">
          <input className="textInput_lv1" type="text" placeholder="이메일" value={saveUserId} onChange={SaveUserId}/>
          <input className="textInput_lv1" type="password" placeholder="비밀번호" value={saveUserPassword} onChange={SaveUserPassword}/>
        </div>

        <button className="buttonFill" 
            onClick={LoginBtn} 
            style={{background : saveUserId.includes('@') && saveUserPassword.length >= 5 ? '#2d71f7' : 'Gray'}}
            disabled={saveUserId.includes('@') && saveUserPassword.length >= 5 ? false : true}>
          <span>로그인</span>
        </button>

        <div className="loginOption">
          <Link to="/Main">회원 가입</Link> 
          <div />
          <Link to='/'>비밀번호 찾기</Link>
        </div>
        
        {/* disabled={ () => { return saveUserId.indexOf('@') === -1 ? false : true } } */}
        {/* { saveUserId.indexOf('@') === -1 ? setColor('#ff0000') : setColor('#2d71f7') } */}
      </div>
    </div>
  );
};

export default Login;
