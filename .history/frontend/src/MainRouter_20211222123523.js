import React from 'react';
import { Navigate, Route, Routes } from 'react-router';


const MainRouter = () => {

    return (
        <div className="mainRouterWrapper">
            <Header />
            <Routes>
                
                    <Route path="" element={<StudentRoutes />}>
                        <Route exact path="studentDashboard" element={<StudentDashboard />} />
                    </Route>
                    <Route path="" element={<MentorRoutes />}>
                        <Route exact path="mentorDashboard" element={<MentorDashboard />} />
                    </Route>

                    <Route exact path="search" element={<SearchCourses />} />
                </Route>
            </Routes>
        </div>

    );
};

export default MainRouter;