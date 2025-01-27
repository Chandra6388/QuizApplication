import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';
import StudentDashboard from '../Layouts/Student/Dashboard';
import AllQuize from '../Layouts/Student/Quize';
import TestSeries from '../Layouts/Student/TestSeries';
import SubscribedTest from '../Layouts/Student/SubscribedTest'
import TestInstruction from '../Layouts/Student/TestInstraction'
import LiveTest from '../Layouts/Student/LiveTest'




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
                            <Route path="/enrolled-test-series" element={<AllQuize />} />
                            <Route path="/test-series" element={<TestSeries />} />
                            <Route path="/subscribed-test" element={<SubscribedTest />} />
                            <Route path="/test-instruction" element={<TestInstruction />} />
                            <Route path="/live-test" element={<LiveTest />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default UserRoutes
