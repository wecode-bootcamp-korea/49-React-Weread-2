import React from "react";
import "./Login.css";

function Login() {

  return (
    <div>
      <section className="images">
          <img src="img/Logo.png" alt="logo" />
          <img src="img/logo_wecode.png" alt="text_logo" />
      </section>

      <section className="infomation">
           <span className="email">이메일</span>
           <span className="password">비밀번호</span>
           <span className="login">로그인</span>
      </section>
    </div>
  )
};

export default Login;
