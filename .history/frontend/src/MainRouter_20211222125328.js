import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Header from './Components/Header';
import AddAuthor from "./Components/AddAuthor"
import AddBook from "./Components/AddBook"
import SignIn from "./Components/SignIn"
import AddPublisher from "./Components/AddPublisher"
import AuthorDashboard from "./Components/AuthorDashboard"
import BooksDashboard from "./Components/BooksDashboard"
import PublishersDashboard from "./Components/PublishersDashboard"

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
                <Route path="/publishersDashboard" element={<PublishersDashboard />} />
                <Route path="/authorDashboard" element={<AuthorDashboard />} />
                <Route path="/booksDashboard" element={<BooksDashboard />} />

            </Routes>
        </div>

    );
};

export default MainRouter;