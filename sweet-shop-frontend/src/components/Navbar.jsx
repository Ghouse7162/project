import React from "react";
import "./Navbar.css";

function Navbar({ onLogout }) {
  const user = localStorage.getItem("user");

  return (
    <div className="navbar">
      <h2 className="logo">🍬 Sweet Shop</h2>

      <div className="nav-right">
        <span className="username">Welcome, {user}</span>
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
