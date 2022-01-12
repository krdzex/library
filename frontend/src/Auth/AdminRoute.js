import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authHelper from './authHelper';

const AdminRoute = () => {
    return authHelper.isAuthentcated().role === "admin" ? <Outlet /> : <Navigate to="/booksDashboard" />;
}

export default AdminRoute