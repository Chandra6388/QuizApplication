import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import AdminDashboard from '../Layouts/Admin/Dashboard/Dashboard';




const UserRoutes = () => {
    return (
        <>
            <SideBar />
            <Header />
            <div className="page-wrapper">
                <Routes>
                    <Route path="/dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </>
    )
}

export default UserRoutes
