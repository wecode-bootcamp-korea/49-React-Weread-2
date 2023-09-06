import React from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";

const Main = () => {

    const navigate = useNavigate();

    const mainButton = () => {
      navigate('/');
     } 

  return (
    <div className="mainBox">
      <div className="backArrow">
        
      <input type="text" value="< 뒤로가기" className="back" onClick={mainButton} ></input>
      </div>

      <div className="joinBox">
        <h1 className="joinMember">회원가입</h1>
        <div>
          <div className="between">
            <span>기본정보</span>
            <span className="choice1">필수사항</span>
          </div>

          <div>
            <input type="text" placeholder="이메일" className="email"></input>
          </div>
          <div>
            <input type="text" placeholder="비밀번호" className="pass"></input>
          </div>
          <div>
            <input
              type="text"
              placeholder="비밀번호 확인"
              className="pass"
            ></input>
          </div>
        </div>

        <div>
          <div className="between">
            <span>닉네임과 프로필 이미지 </span>
            <span className="choice">선택 사항</span>
          </div>
          <div>
            <input type="text" placeholder="닉네임" className="pass"></input>
          </div>
        </div>

        <div>
          <div className="between">
            <span>전화번호</span>
            <span className="choice">선택 사항</span>
          </div>

          <div className="numberBox">
            <select name="phone" className="pass">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="017">017</option>
              <option value="019">019</option>
            </select>
            <input type="text" placeholder="휴대전화 번호를 입력하세요." className="pass1"></input>
          </div>
        </div>

        <div>
          <div className="between">
            <span>생일</span>
            <span className="choice">선택 사항</span>
          </div>

          <div className="numberBox2">
            <select name="year" className="pass">
              <option value="1995년">1995년</option>
              <option value="1996년">1996년</option>
              <option value="1997년">1997년</option>
              <option value="1998년">1998년</option>
            </select>

            <select name="month" className="pass1">
              <option value="1월">1월</option>
              <option value="2월">2월</option>
              <option value="3월">3월</option>
              <option value="4월">4월</option>
            </select>

            <select name="day" className="pass2">
              <option value="1일">1일</option>
              <option value="2일">2일</option>
              <option value="3일">3일</option>
              <option value="4일">4일</option>
            </select>
          </div>
        </div>
      </div>

      <div className="lastButton">
        <div>
          <input type="button" className="buttonlogin" value="로그인"></input>
        </div>
      </div>
    </div>
  );
};

export default Main;
