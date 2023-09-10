import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import Main from './pages/Main/Main'

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/Main' element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;

