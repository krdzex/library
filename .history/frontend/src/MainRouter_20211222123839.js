import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Header from './Components/Header';
import SignIn from "."

const MainRouter = () => {

    return (
        <div className="mainRouterWrapper">
            <Header />
            <Routes>
                <Route path="" element={<Navigate replace to="/signIn" />} />
                <Route path="signIn" element={<SignIn />} />
            </Routes>
        </div>

    );
};

export default MainRouter;