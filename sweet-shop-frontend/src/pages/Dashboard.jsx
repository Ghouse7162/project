import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SweetsList from "../components/SweetsList";
function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />

      <div
        style={{
          minHeight: "calc(100vh - 70px)",
          backgroundColor: "#f7f7f7",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Sweet Shop Dashboard
        </h2>

        <SweetsList />
      </div>
    </>
  );
}

export default Dashboard;
