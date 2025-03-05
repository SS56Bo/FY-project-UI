import { Link } from "react-router-dom";
import React from "react";

function Tracker() {
  return (
    <div>
      <div className="home-container">
        <nav className="nav-ui">
          <Link to="/">Home</Link> | <Link to="/tracker">About</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <h1>Welcome to Tracker UI</h1>
        <p>This is the tracker page</p>
      </div>
    </div>
  );
}

export default Tracker;
