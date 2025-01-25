import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import StudentDashboard from '../Layouts/Student/Dashboard';
import AllQuize from '../Layouts/Student/Quize';




const UserRoutes = () => {
    return ( 
        <div className="admin-container">
            <Header />
            <div className="admin-content">
                <SideBar />
                <main id="main" className="main">
                    <div className="admin-main">
                        <Routes>
                            <Route path="/dashboard" element={<StudentDashboard />} />
                            <Route path="/all-quizes" element={<AllQuize />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserRoutes
