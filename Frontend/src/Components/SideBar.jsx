import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item"
            style={{ cursor: "pointer" }}
          >
            <div className="nav-link " onClick={() => navigate('/admin/dashboard')} >
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/admin/all-students')}
            >
              <i className="bi bi-journal-text" />
              <span>All Student</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/admin/all-teachers')}
            >
              <i className="bi bi-journal-text" />
              <span>All Teacher</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/admin/all-staff')}
            >
              <i className="bi bi-journal-text" />
              <span>All Staff</span>
            </div>
          </li>
          <li className="nav-item">
            <div
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/admin/all-quizes')}
            >
              <i className="bi bi-journal-text" />
              <span>Quize</span>
            </div>
          </li>


        </ul>
      </aside>

    </>


  );
}
export default Login;