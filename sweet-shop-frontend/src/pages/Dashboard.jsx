import React from "react";
import { useNavigate } from "react-router-dom";
import SweetsList from "../components/SweetsList.jsx";
import "./Dashboard.css";

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Sweet Shop Dashboard</h1>
          <button className="logout-button" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>

        <p className="dashboard-welcome">
          Welcome! Browse and purchase your favorite sweets 🍬
        </p>

        <SweetsList />
      </div>
    </div>
  );
}

export default Dashboard;
