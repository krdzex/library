import React from 'react';
import { Routes } from 'react-router';
import Header from './Components/Header';


const MainRouter = () => {

    return (
        <div className="mainRouterWrapper">
            <Header />
            <Routes>
                <Route path="" element={<Navigate replace to="/signIn" />} />
            </Routes>
        </div>

    );
};

export default MainRouter;