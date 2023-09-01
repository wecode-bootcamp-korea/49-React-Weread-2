import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
            <section className="flexCenter">이곳은 로그인 화면입니다.</section>
            <Link to="/">메인 화면으로 이동하기</Link>
        </div>
    );
};

export default Login;