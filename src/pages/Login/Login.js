import React, { useState } from "react";
import "./Login.scss";
import { Link,useNavigate } from "react-router-dom"; // 재료꺼내기

const Login = () => {
     const navigate = useNavigate(); // 함수 실행 변수할당

     const [userid , setUserId] = useState('');
     const [userpw , setUserPw] = useState('');

     const loginButton = () => {
      navigate('/main');
      } 

    const saveUserId = (event) =>{
      setUserId(event.target.value)
    }
    const saveUserPw = (event) =>{
      setUserPw(event.target.value)
    }

    console.log(userid.includes('@'))
    //ID 에 '@' 포함되면 버튼을 활성화!
    //포함이 안되면 버튼을 색상을 회색으로하고 비활성화! 
    //조건이 완성되면 앤드로 비밀번호 조건 넣기

  return ( 
   
    <div className="login">
      <div className="imgBox">
       <div>
         <div><img className="imgLogoFrist" src="/wecodeLogo.png" /></div>
         <div><img className="imgLogoTwo" src="/wecodeLogo2.png" /></div>
        </div>
      </div>
      
       <div className="loginBox">     
         
          <input type="text" placeholder="이메일" className="email" onChange={saveUserId}></input>
          <input type="password" placeholder="비밀번호" className="pass" onChange={saveUserPw}></input>
          <input 
                style={{backgroundColor:userid.includes('@') && userpw.length >= 5 ? null : "gray"}} 
                onClick={loginButton} 
                type="button" 
                className="buttonlogin" 
                value="로그인"
                disabled = {userid.includes('@') && userpw.length >= 5 ? false : true}>  
          </input>
         
         <div className="smallBox">
          <div>
           <Link className="join" to='/main'>회원가입</Link>
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
