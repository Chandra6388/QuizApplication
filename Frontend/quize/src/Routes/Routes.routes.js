import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Login from '../Layouts/Auth/Login'; 


const Routing = () => {
    
    return (
        <Routes>   
            <Route path="/" element={<Login />} /> 
        </Routes>
    );
}

export default Routing;
