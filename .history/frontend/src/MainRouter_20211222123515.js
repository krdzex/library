import React from 'react';
import { Navigate, Route, Routes } from 'react-router';


const MainRouter = () => {

    return (
        <div className="mainRouterWrapper">
            <Header />
            <Routes>
                <Route path="/" element={<BlockedRoute />}>
                    <Route path="" element={<Navigate replace to="/signIn" />} />
                    <Route path="signIn" element={<SignIn />} />
                    <Route path="signUp" element={<SignUp />} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path="" element={<AdminRoutes />}>
                        <Route exact path="dashboard/users" element={<AdminDashboard />} />
                        <Route exact path="dashboard/courses" element={<AdminDashboard />} />
                        <Route exact path="user/:userId" element={<EditAccount />} />
                        <Route exact path="addUser" element={<AddUser />} />
                    </Route>
                    <Route path="" element={<AdminAndMentorRoutes />}>
                        <Route exact path="course/:courseId" element={<EditCourse />} />
                        <Route exact path="addCourse" element={<AddCourse />} />
                    </Route>
                    <Route path="" element={<AuthorizationRoute />}>
                        <Route exact path="editProfile/info/:userId" element={<EditAccount />} />
                        <Route exact path="editProfile/password/:userId" element={<EditPassword />} />
                        <Route exact path="editProfile/delete/:userId" element={<DeleteProfile />} />
                    </Route>
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