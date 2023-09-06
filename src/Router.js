import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 // Router 하기 위한 재료꺼내기!
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';   //각자 로그인 페이지 메인페이지 import하기 연결

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>   
            <Route path='/main' element={< Main/>}/>
        </Routes>
        </BrowserRouter>
         //경로 파일 지정해주기!
    );
};

export default Router;      // export 반환해주기

