import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">My Portfolio</h2>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><a href="/">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
