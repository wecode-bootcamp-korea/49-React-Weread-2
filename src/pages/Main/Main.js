import React, { useState } from "react";
import "./Main.scss";

const Main = () => {
  // state
  const [ email, setEmail] = useState('');
  
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div className="joinInfo">
      <div className="header">
        <div className="back">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M22.5 10L12.5 20L22.5 30" stroke="black" stroke-width="2" stroke-miterlimit="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span>뒤로</span>
        </div>
      </div>

      <div className="container">
  
          <div className="pageTitle">
          <h1>회원가입</h1>
        </div>
        

        <div className="basicInfo">
          <div className="label">
            <p>기본 정보</p>           
            <span>필수 사항</span>
          </div>
          <div className="list">
            <input className="textInput_lv1" placeholder="이메일" value={email} onChange={onChangeEmail} />
            <input className="textInput_lv1" placeholder="비밀번호" type="password" />
            <input className="textInput_lv1" placeholder="비밀번호 확인" />
          </div>
        </div>

        <div className="nicknameInfo">
          <div className="label">
            <p>닉네임과 프로필 이미지</p>
            <span>선택 사항</span>
          </div>
          <input className="textInput_lv1" placeholder="닉네임"></input>
        </div>

        <div className="phone">
          <div class="label">
            <p>전화번호</p>
            <span>선택 사항</span>
          </div>
          <div className="birth">
            <select className="selectBox" id="phoneNumber" value="010" selected>
              <option className="select" value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
            </select>
            <input className="textInput_lv1" placeholder="휴대폰 번호를 입력해주세요."></input>
          </div>
        </div>

        <div className="birthday">
          <div className="label">
            <p>생년월일</p>
            <span>선택 사항</span>
          </div>
          <div className="birth">
            <select className="selectBox" id="box1" selected>
              <option className="select" value="1988년">1988년</option>
              <option value="1989년">1989년</option>
              <option value="1990년">1990년</option>
            </select>
            <select className="selectBox" id="box2" value="01월">
              <option className="select" value="01월">01월</option>
              <option value="02월">02월</option>
              <option value="03월">03월</option>
            </select>
            <select className="selectBox" id="box2" value="01일">
              <option className="select" value="01일">01일</option>
              <option value="02일">02일</option>
              <option value="03일">03일</option>
            </select>
          </div>
        </div>
      </div>

      <div className="action">
        <button className="buttonFill">
          <span>회원 가입</span>
        </button>
      </div>
    </div>
  );
};

export default Main;
