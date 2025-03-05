import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [username, setUsername] = useState("");
  const [pw, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", pw);
  }

  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Choose a username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
      </p>
    </div>
  );
}

export default SignIn;
