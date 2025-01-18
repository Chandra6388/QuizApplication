import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from '../Components/Header';
import SideBar from '../Components/SideBar';




const UserRoutes = () => {
    return (
        <>
            <SideBar />
            <Header />
            <div className="page-wrapper">
                <Routes>
                </Routes>
            </div>
        </>
    )
}

export default UserRoutes
