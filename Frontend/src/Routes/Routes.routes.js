import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";


import Login from '../Layouts/Auth/Login';  
import AdminRouting from './AdminRoutes';
import UserRouting from './UserRoutes';
import Resister from '../Layouts/Auth/Resister';




const Routing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const roles =  JSON.parse(localStorage.getItem("user"))?.role;
    const user_details = JSON.parse(localStorage.getItem("user"));


   
    useEffect(() => {
        if (location.pathname === "/register") {
            navigate("/register");
            return;
        } 
        if (!user_details || !roles || user_details === "null" || roles === "null" || location.pathname === "/login") {
            
            navigate("/login");
            return;
        }

        switch (roles) {
            case "ADMIN":
                if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/admin")) {
                    navigate("/admin/dashboard");
                }
                break;
            case "USER":
                if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/user")) {
                    navigate("/user/dashboard");
                }
                break;
            case "SUBADMIN":
                if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/subadmin")) {
                    navigate("/subadmin/dashboard");
                }
                break;
            case "EMPLOYEE":
                if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/employee")) {
                    navigate("/employee/dashboard");
                }
                break;
            case "RESEARCH":
                if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/research")) {
                    navigate("/research/dashboard");
                }
                break;
            case "SUPERADMIN":
                if (location.pathname === "/login" || location.pathname === "/" || !location.pathname.startsWith("/superadmin")) {
                    navigate("/superadmin/dashboard");
                }
                break;
            default:
                break;
        }
    }, [navigate, location.pathname, roles, user_details]);

 
    return (
        <Routes>   
            <Route path="/admin/*" element={(roles=="ADMIN" ? <AdminRouting/> : <Login />)} />
            <Route path="/student/*" element={(roles=="USER" ? <UserRouting/> : <Login />)} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Resister />} />

        </Routes>
    );
}

export default Routing;
