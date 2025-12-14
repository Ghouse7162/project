import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SweetsList from "../components/SweetsList";
import "./dashboard.css";

import laddooImg from "../assets/laddoo.jpg";
import kajukatliImg from "../assets/kajukatli.jpg";
import basantiImg from "../assets/basanti.jpg";
import mysurpakImg from "../assets/mysurpak.jpg";
import peddaImg from "../assets/pedda.jpg";
import khalakhanImg from "../assets/khalakhan.jpg";
import jalebiImg from "../assets/jalebi.jpg";
import barfiImg from "../assets/barfi.jpg";
import rasgullaImg from "../assets/rasgulla.jpg";
import chocolateImg from "../assets/chocolate.jpg";
import lollipopImg from "../assets/lollipop.jpg";
import gummyImg from "../assets/gummy.jpg";

const DEFAULT_SWEETS = [
  { id: 1, name: "Laddoo", category: "traditional", price: 10, quantity: 20, image: laddooImg },
  { id: 2, name: "Kaju Katli", category: "traditional", price: 15, quantity: 15, image: kajukatliImg },
  { id: 3, name: "Basanti", category: "traditional", price: 8, quantity: 10, image: basantiImg },
  { id: 4, name: "Mysurpak", category: "traditional", price: 12, quantity: 12, image: mysurpakImg },
  { id: 5, name: "Pedda", category: "traditional", price: 9, quantity: 14, image: peddaImg },
  { id: 6, name: "Khalakhan", category: "traditional", price: 20, quantity: 8, image: khalakhanImg },
  { id: 7, name: "Jalebi", category: "traditional", price: 6, quantity: 18, image: jalebiImg },
  { id: 8, name: "Barfi", category: "traditional", price: 11, quantity: 16, image: barfiImg },
  { id: 9, name: "Rasgulla", category: "traditional", price: 7, quantity: 20, image: rasgullaImg },
  { id: 10, name: "Chocolate", category: "chocolate", price: 2, quantity: 10, image: chocolateImg },
  { id: 11, name: "Lollipop", category: "lollipop", price: 1, quantity: 5, image: lollipopImg },
  { id: 12, name: "Gummy Bears", category: "lollipop", price: 3, quantity: 8, image: gummyImg },
];

function Dashboard({ onLogout }) {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const isAdmin = user === "admin";

  const [sweets, setSweets] = useState(() => {
    const stored = localStorage.getItem("sweets");
    return stored ? JSON.parse(stored) : DEFAULT_SWEETS;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [newSweet, setNewSweet] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    localStorage.setItem("sweets", JSON.stringify(sweets));
  }, [sweets]);

  const handleLogout = () => {
    onLogout();
    navigate("/login");
  };

  const handlePurchase = (id) => {
    setSweets(prev =>
      prev.map(sweet =>
        sweet.id === id && sweet.quantity > 0
          ? { ...sweet, quantity: sweet.quantity - 1 }
          : sweet
      )
    );
  };

  const handleRestock = (id) => {
    setSweets(prev =>
      prev.map(sweet =>
        sweet.id === id ? { ...sweet, quantity: sweet.quantity + 5 } : sweet
      )
    );
  };

  const handleInputChange = (e) => {
    setNewSweet({ ...newSweet, [e.target.name]: e.target.value });
  };

  const handleAddSweet = (e) => {
    e.preventDefault();
    if (!newSweet.name || !newSweet.price || !newSweet.quantity || !newSweet.category) return;
    const id = Date.now();
    const sweet = { ...newSweet, id, price: parseFloat(newSweet.price), quantity: parseInt(newSweet.quantity) };
    setSweets(prev => [...prev, sweet]);
    setNewSweet({ name: "", price: "", quantity: "", image: "", category: "" });
    setShowForm(false);
  };

  const filteredSweets = sweets.filter(sweet => {
    const matchName = sweet.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = categoryFilter ? sweet.category === categoryFilter : true;
    const matchPrice =
      (minPrice ? sweet.price >= parseFloat(minPrice) : true) &&
      (maxPrice ? sweet.price <= parseFloat(maxPrice) : true);
    return matchName && matchCategory && matchPrice;
  });

  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        <Navbar onLogout={handleLogout} />
        <h1 className="dashboard-welcome">Sweet Shop Dashboard</h1>

        {/* Search & Filters */}
        <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ddd" }}
          >
            <option value="">All Categories</option>
            <option value="traditional">Traditional</option>
            <option value="chocolate">Chocolate</option>
            <option value="lollipop">Lollipop</option>
          </select>
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ddd", width: "100px" }}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={{ padding: "8px", borderRadius: "8px", border: "1px solid #ddd", width: "100px" }}
          />
        </div>

        {/* Admin Add Sweet Form */}
        {isAdmin && (
          <>
            <button
              style={{ marginBottom: "20px", padding: "10px 20px", borderRadius: "8px", backgroundColor: "#ff4d6d", color: "#fff", border: "none", cursor: "pointer" }}
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Cancel" : "Add Sweet"}
            </button>

            {showForm && (
              <form onSubmit={handleAddSweet} style={{ marginBottom: "30px", display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
                <input type="text" name="name" placeholder="Sweet Name" value={newSweet.name} onChange={handleInputChange} required />
                <input type="text" name="category" placeholder="Category" value={newSweet.category} onChange={handleInputChange} required />
                <input type="number" name="price" placeholder="Price" value={newSweet.price} onChange={handleInputChange} required />
                <input type="number" name="quantity" placeholder="Quantity" value={newSweet.quantity} onChange={handleInputChange} required />
                <input type="text" name="image" placeholder="Image URL" value={newSweet.image} onChange={handleInputChange} />
                <button type="submit" style={{ padding: "10px", borderRadius: "8px", backgroundColor: "#ff4d6d", color: "#fff", border: "none", cursor: "pointer" }}>Add Sweet</button>
              </form>
            )}
          </>
        )}

        {/* Sweets List */}
        <SweetsList
          sweets={filteredSweets}
          handlePurchase={handlePurchase}
          handleRestock={handleRestock}
          isAdmin={isAdmin}
        />
      </div>
    </div>
  );
}

export default Dashboard;
