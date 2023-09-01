import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
    return (
        <div className="main">
            <section className="flexCenter">이곳은 메인 화면입니다.</section>
            <Link to="/login">로그인 화면으로 이동하기</Link>
        </div>
    );
};

export default Main;