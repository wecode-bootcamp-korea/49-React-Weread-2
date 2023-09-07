import React, { useState } from "react";
import "./Main.css";
import { Link }  from 'react-router-dom'


const Main = () => {

  return (
  <main>
    <form>
      <fieldset>
        <header className="back_page">
          <div><Link to="/">뒤로</Link></div>
        </header>
        <div className="main_box">
          <h1>회원가입</h1>
          <section className="basic_info">
            <label className="labeling">기본정보<span className="required">필수사항</span></label>
            <div className="join_info">
              <input type="text" placeholder="이메일" required/>
              <input type="password" placeholder="비밀번호" required/>
              <input type="password" placeholder="비밀번호 확인" required/>
            </div>
          </section>
          <section className="profile">
            <label className="labeling">닉네임과 프로필 이미지<span className="optional">선택사항</span></label>
            <input type="name" placeholder="닉네임" />
          </section>
          <section className="phone_number">
            <label className="labeling">전화번호<span className="optional">선택사항</span></label>
             <select className="prefix"></select>
               <option value="010">010</option>
               <option value="011">011</option>
               <option value="017">017</option>
               <option value="019">019</option>
             <input type="text" placeholder="휴대폰 번호를 입력해주세요." />
          </section>
          <section className="birth">
            <label className="labeling">생일<span className="optional">선택사항</span></label>
            <ul className="birth_info">
              <li><select id="year"></select></li>
              <li><select id="month"></select></li>
              <li><select id="day"></select></li>
            </ul>
          </section>
          <section>
            <button type="button" className="button">회원 가입</button>
          </section>
        </div>
      </fieldset>
    </form>
  </main>
  );
};

export default Main;
