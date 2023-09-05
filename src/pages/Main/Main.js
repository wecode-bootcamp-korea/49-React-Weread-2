import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Main.scss";

const Main = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/');
  }
  return (
    <div className="main">
      <header className="header">
        <button type="button" className="btn-back" onClick={goToLogin}>
          <span>뒤로</span>
        </button>
      </header>
      <main>
        <form className="form">
          <legend className="hidden">회원가입 양식</legend>
          <h1>회원가입</h1>
          <div className="input-wrapper">
            <div className="input-wrap">
              <span className="required">필수 사항</span>
              <label for="email">기본 정보</label>
              <input id="email" type="text" placeholder="이메일" className="input-style" required />
            </div>
            <div class="input-wrap">
              <label>
                <input type="password" placeholder="비밀번호" className="input-style" />
              </label>
            </div>
            <div class="input-wrap">
              <label>
                <input type="password" placeholder="비밀번호 확인" className="input-style" />
              </label>
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-wrap">
              <span className="optional">선택 사항</span>
              <label for="nickname">닉네임과 프로필 이미지</label>
              <input id="nickname" type="text" placeholder="닉네임" className="input-style" />
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-wrap">
              <span className="optional">선택 사항</span>
              <label for="tel">전화번호</label>
              <div className="input-flex">
                <select id="tel" className="input-style">
                  <option value="010" selected>010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                </select>
                <label>
                  <input type="text" placeholder="휴대폰 번호를 입력해주세요." className="input-style" />
                </label>
              </div>
            </div>
          </div>
          <div className="input-wrapper">
            <div className="input-wrap">
              <span className="optional">선택 사항</span>
              <label for="year">생일</label>
              <div className="input-flex">
                <select id="year" className="input-style">
                  <option value="1998년" selected>1998년</option>
                  <option value="1999년">1999년</option>
                  <option value="2000년">2000년</option>
                </select>
                <select id="month" className="input-style">
                  <option value="1월" selected>1월</option>
                  <option value="2월">2월</option>
                  <option value="3월">3월</option>
                </select>
                <label>
                  <input type="text" placeholder="1일" className="input-style" />
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">회원 가입</button>
        </form>
      </main>
    </div>
  );
};

export default Main;
