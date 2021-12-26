import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Header from './Components/Header';
import AddAuthor from "./Components/AddAuthor"
import AddBook from "./Components/AddBook"
import SignIn from "./Components/SignIn"

const MainRouter = () => {

    return (
        <div className="mainRouterWrapper">
            <Header />
            <Routes>
                <Route path="" element={<Navigate replace to="/signIn" />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/addAuthor" element={<AddAuthor />} />
                <Route path="/addBook" element={<AddBook />} />
                <Route path="/addPublisher" element={<addPublisher />} />
                <Route path="/addBook" element={<AddBook />} />

            </Routes>
        </div>

    );
};

export default MainRouter;