import React from "react";
import "./Login.scss";

const Login = () => {
  return (
   
    <div className="login">
      <div className="imgBox">
       <div>
         <div><img className="imgLogoFrist" src="/wecodeLogo.png" /></div>
         <div><img className="imgLogoTwo" src="/wecodeLogo2.png" /></div>
        </div>
      </div>
      
       <div className="loginBox">
         
          <input type="text" placeholder="이메일" className="email"></input>
          <input type="text" placeholder="비밀번호" className="pass"></input>
          <input type="button" className="buttonlogin"value="로그인"></input>
         
         <div className="smallBox">
          <div>
           <input type="button" className="join"value="회원가입"></input>
          </div>
          <div>
           <input type="button" className="passFind"value="비밀번호 찾기"></input>
          </div>
          
         </div>

        </div>
    </div>

  
  );
};
//<input class="searchInput" type="text" placeholder="과제 구현 검색창입니다.">
export default Login;
