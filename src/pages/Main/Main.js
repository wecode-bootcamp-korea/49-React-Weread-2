import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="allBox">
      <div className="backArrow">
        <div>뒤로</div>
      </div>

      <div>
        <span>기본정보</span>
        <span>필수사항</span>
      </div>

      <div>
        <input type="text" placeholder="이메일" className="email"></input>
      </div>
      <div>
        <input type="text" placeholder="비밀번호" className="pass"></input>
      </div>
      <div>
        <input type="text" placeholder="비밀번호 g" className="pass"></input>
      </div>
    </div>
  );
};

export default Main;
