import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Header from './Components/Header';
import AddAuthor from "./Components/AddAuthor"
import AddBook from "./Components//AddComponents/AddBook"
import SignIn from "./Components/SignIn"
import AddPublisher from "./Components/AddComponents/AddPublisher"
import AuthorDashboard from "./Components/AuthorDashboard"
import BooksDashboard from "./Components/BooksDashboard"
import PublisherDashboard from "./Components/PublisherDashboard"

const MainRouter = () => {

    return (
        <div className="mainRouterWrapper">
            <Header />
            <Routes>
                <Route path="" element={<Navigate replace to="/signIn" />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/addAuthor" element={<AddAuthor />} />
                <Route path="/addBook" element={<AddBook />} />
                <Route path="/addPublisher" element={<AddPublisher />} />
                <Route path="/publisherDashboard" element={<PublisherDashboard />} />
                <Route path="/authorDashboard" element={<AuthorDashboard />} />
                <Route path="/booksDashboard" element={<BooksDashboard />} />

            </Routes>
        </div>

    );
};

export default MainRouter;