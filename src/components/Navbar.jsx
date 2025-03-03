import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="nav-ui">
        <div>
          <h1>Tracker</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>Tracker</li>
          <li>Dashboard</li>
        </ul>
        <button>Sign In</button>
      </nav>
    </div>
  );
}

export default Navbar;
