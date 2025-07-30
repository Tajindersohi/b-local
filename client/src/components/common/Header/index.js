import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Header Component
function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navbarStyle}>
        <ul style={navLinksStyle}>
          <li><Link to="/" style={linkStyle}>Home</Link></li>
          <li><Link to="/about" style={linkStyle}>About</Link></li>
          <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "15px 30px",
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
};

const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const logoStyle = {
  fontSize: "24px",
  margin: 0
};

const navLinksStyle = {
  listStyle: "none",
  display: "flex",
  gap: "20px",
  margin: 0,
  padding: 0
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

const pageStyle = {
  paddingTop: "80px", // Prevents overlap with fixed header
  padding: "20px"
};
