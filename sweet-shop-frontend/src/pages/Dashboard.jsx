import React from "react";
import { useNavigate } from "react-router-dom";
import SweetsList from "../components/SweetsList"; // import the sweets component

function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(); // clear user state and localStorage
    navigate("/login"); // redirect to login
  };

  return (
    <div style={{
      padding: "20px",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fdfbfb, #ebedee)"
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", color: "#333" }}>Sweet Shop Dashboard</h1>
        <button
          onClick={handleLogoutClick}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#ff4d6d",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Welcome message */}
      <p style={{ marginTop: "10px", fontSize: "1.1rem", color: "#555" }}>
        Welcome! Browse and purchase your favorite sweets below.
      </p>

      {/* Render SweetsList */}
      <SweetsList />
    </div>
  );
}

export default Dashboard;
